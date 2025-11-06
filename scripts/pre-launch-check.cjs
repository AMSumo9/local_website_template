#!/usr/bin/env node

/**
 * Pre-Launch Content Check
 *
 * This script validates content before deployment, checking for:
 * - Template placeholder text
 * - Niche consistency (no "Bendigo" or "Mortgage" if different niche)
 * - AI writing hallmarks (em dashes, common AI phrases)
 * - Spelling consistency based on locale
 * - Broken internal references
 */

const fs = require('fs');
const path = require('path');

// Load project configuration
const PROJECT_JSON_PATH = path.join(__dirname, '../src/data/project.json');
let projectData = {};

try {
  const rawData = fs.readFileSync(PROJECT_JSON_PATH, 'utf8');
  projectData = JSON.parse(rawData);
} catch (error) {
  console.error('❌ Error: Could not load project.json');
  console.error(error.message);
  process.exit(1);
}

// Configuration
const CONTENT_DIRS = [
  'src/content/locations',
  'src/content/services',
  'src/content/posts',
  'src/pages'
];

let warnings = [];
let errors = [];
let info = [];

console.log('🔍 Running Pre-Launch Content Validation...\n');
console.log('═══════════════════════════════════════════\n');

// ============================================
// 1. Check for Template Placeholders
// ============================================

console.log('1️⃣  Checking for placeholder text...');

const placeholderPatterns = [
  /TODO/gi,
  /FIXME/gi,
  /XXX/gi,
  /\[Company Name\]/gi,
  /\[City\]/gi,
  /\[Service\]/gi,
  /PLACEHOLDER/gi,
  /REPLACE/gi,
  /EXAMPLE/gi
];

function checkPlaceholders(content, filename) {
  placeholderPatterns.forEach(pattern => {
    const matches = content.match(pattern);
    if (matches) {
      errors.push(`${filename}: Found placeholder "${matches[0]}"`);
    }
  });
}

// ============================================
// 2. Check for Template References
// ============================================

console.log('2️⃣  Checking for template niche references...');

const templateReferences = [
  { pattern: /Bendigo/g, name: 'Bendigo' },
  { pattern: /Mortgage Broker/gi, name: 'Mortgage Broker' }
];

const expectedCity = projectData?.contact?.nap?.city || '';
const expectedService = projectData?.industry?.serviceName || '';

function checkTemplateReferences(content, filename) {
  // Skip if current city IS Bendigo or service IS Mortgage Broker
  if (expectedCity !== 'Bendigo') {
    const bendigoMatches = content.match(/Bendigo/g);
    if (bendigoMatches) {
      warnings.push(`${filename}: Found ${bendigoMatches.length} reference(s) to "Bendigo" (expected: ${expectedCity})`);
    }
  }

  if (expectedService !== 'Mortgage Broker') {
    const mortgageMatches = content.match(/Mortgage Broker/gi);
    if (mortgageMatches) {
      warnings.push(`${filename}: Found ${mortgageMatches.length} reference(s) to "Mortgage Broker" (expected: ${expectedService})`);
    }
  }
}

// ============================================
// 3. Check for AI Writing Hallmarks
// ============================================

console.log('3️⃣  Checking for AI writing hallmarks...');

const aiHallmarks = [
  { pattern: /—/g, name: 'em dash (—)', suggestion: 'Replace with comma, period, or hyphen (-)' },
  { pattern: /It'?s worth noting/gi, name: '"It\'s worth noting"', suggestion: 'Remove or rephrase' },
  { pattern: /It'?s important to note/gi, name: '"It\'s important to note"', suggestion: 'Remove or rephrase' },
  { pattern: /Let'?s delve into/gi, name: '"Let\'s delve into"', suggestion: 'Replace with simpler phrasing' },
  { pattern: /Navigate the (?:complex )?landscape/gi, name: '"Navigate the landscape"', suggestion: 'Use simpler language' },
  { pattern: /\blever age\b/gi, name: '"leverage"', suggestion: 'Replace with "use"' },
  { pattern: /\butili[sz]e\b/gi, name: '"utilize"', suggestion: 'Replace with "use"' },
  { pattern: /In order to\b/gi, name: '"In order to"', suggestion: 'Replace with "to"' },
  { pattern: /\bembark on (?:your|their|the) journey/gi, name: '"embark on journey"', suggestion: 'Use simpler phrasing' }
];

function checkAIHallmarks(content, filename) {
  aiHallmarks.forEach(({ pattern, name, suggestion }) => {
    const matches = content.match(pattern);
    if (matches) {
      warnings.push(`${filename}: Found ${matches.length}x ${name}. ${suggestion}`);
    }
  });
}

// ============================================
// 4. Check Spelling Consistency
// ============================================

console.log('4️⃣  Checking spelling consistency...');

const locale = projectData?.locale?.spelling || 'british';
const country = projectData?.locale?.country || 'AU';

let spellingChecks = [];

if (locale === 'british' || country === 'AU' || country === 'GB') {
  // Check for American spellings in British context
  spellingChecks = [
    { pattern: /\bcolor\b/gi, correct: 'colour', type: 'American in British' },
    { pattern: /\borganize\b/gi, correct: 'organise', type: 'American in British' },
    { pattern: /\brealize\b/gi, correct: 'realise', type: 'American in British' },
    { pattern: /\bspecialize\b/gi, correct: 'specialise', type: 'American in British' },
    { pattern: /\bcenter\b/gi, correct: 'centre', type: 'American in British' },
    { pattern: /\banalyze\b/gi, correct: 'analyse', type: 'American in British' },
    { pattern: /\btraveled\b/gi, correct: 'travelled', type: 'American in British' }
  ];
} else if (locale === 'american' || country === 'US') {
  // Check for British spellings in American context
  spellingChecks = [
    { pattern: /\bcolour\b/gi, correct: 'color', type: 'British in American' },
    { pattern: /\borganise\b/gi, correct: 'organize', type: 'British in American' },
    { pattern: /\brealise\b/gi, correct: 'realize', type: 'British in American' },
    { pattern: /\bspecialise\b/gi, correct: 'specialize', type: 'British in American' },
    { pattern: /\bcentre\b/gi, correct: 'center', type: 'British in American' },
    { pattern: /\banalyse\b/gi, correct: 'analyze', type: 'British in American' },
    { pattern: /\btravelled\b/gi, correct: 'traveled', type: 'British in American' }
  ];
}

function checkSpelling(content, filename) {
  spellingChecks.forEach(({ pattern, correct, type }) => {
    const matches = content.match(pattern);
    if (matches) {
      warnings.push(`${filename}: Found ${type} spelling "${matches[0]}" (should be "${correct}")`);
    }
  });
}

// ============================================
// 5. Scan All Files
// ============================================

console.log('5️⃣  Scanning content files...\n');

function scanDirectory(dir) {
  const fullPath = path.join(__dirname, '..', dir);

  if (!fs.existsSync(fullPath)) {
    return;
  }

  function walkDir(currentPath) {
    const files = fs.readdirSync(currentPath);

    files.forEach(file => {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.md') || file.endsWith('.astro') || file.endsWith('.mdx')) {
        const relativePath = path.relative(path.join(__dirname, '..'), filePath);
        const content = fs.readFileSync(filePath, 'utf8');

        checkPlaceholders(content, relativePath);
        checkTemplateReferences(content, relativePath);
        checkAIHallmarks(content, relativePath);
        checkSpelling(content, relativePath);
      }
    });
  }

  walkDir(fullPath);
}

CONTENT_DIRS.forEach(dir => scanDirectory(dir));

// ============================================
// 6. Check Project Configuration
// ============================================

console.log('6️⃣  Validating project configuration...');

// Check required fields
const requiredFields = [
  { path: 'company.name', name: 'Company Name' },
  { path: 'contact.nap.city', name: 'City' },
  { path: 'contact.nap.phone_raw', name: 'Phone Number' },
  { path: 'contact.email', name: 'Email' },
  { path: 'industry.serviceName', name: 'Service Name' }
];

requiredFields.forEach(({ path: fieldPath, name }) => {
  const value = fieldPath.split('.').reduce((obj, key) => obj?.[key], projectData);
  if (!value || value.includes('[') || value.includes('example')) {
    errors.push(`project.json: Missing or placeholder value for ${name} (${fieldPath})`);
  }
});

// Check author strategy
if (!projectData.author_strategy) {
  warnings.push('project.json: No author_strategy defined (should be "individual", "company", or "team")');
}

if (projectData.persona?.expert_name?.includes('Example') || projectData.persona?.expert_name?.includes('Placeholder')) {
  errors.push('project.json: Persona contains placeholder/example data');
}

// ============================================
// 7. Generate Report
// ============================================

console.log('\n═══════════════════════════════════════════');
console.log('📊 VALIDATION REPORT\n');

console.log(`✅ Errors: ${errors.length}`);
console.log(`⚠️  Warnings: ${warnings.length}`);
console.log(`ℹ️  Info: ${info.length}\n`);

if (errors.length > 0) {
  console.log('═══════════════════════════════════════════');
  console.log('❌ ERRORS (Must Fix Before Launch)\n');
  errors.forEach(error => console.log(`  • ${error}`));
  console.log('');
}

if (warnings.length > 0) {
  console.log('═══════════════════════════════════════════');
  console.log('⚠️  WARNINGS (Review Recommended)\n');
  warnings.forEach(warning => console.log(`  • ${warning}`));
  console.log('');
}

if (info.length > 0) {
  console.log('═══════════════════════════════════════════');
  console.log('ℹ️  INFORMATION\n');
  info.forEach(i => console.log(`  • ${i}`));
  console.log('');
}

console.log('═══════════════════════════════════════════');

if (errors.length > 0) {
  console.log('\n❌ Pre-launch validation FAILED.');
  console.log('   Fix all errors before deploying.\n');
  process.exit(1);
} else if (warnings.length > 0) {
  console.log('\n⚠️  Pre-launch validation passed with warnings.');
  console.log('   Review warnings before deploying.\n');
  process.exit(0);
} else {
  console.log('\n✅ Pre-launch validation PASSED!');
  console.log('   Your site is ready to deploy.\n');
  process.exit(0);
}
