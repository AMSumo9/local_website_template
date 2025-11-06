#!/usr/bin/env node

/**
 * Validate Services Count
 *
 * This script ensures that the number of services is a multiple of 3
 * to maintain proper grid layout (3 columns).
 */

const fs = require('fs');
const path = require('path');

const SERVICES_DIR = path.join(__dirname, '../src/content/services');

console.log('🔍 Validating services count...\n');

// Check if services directory exists
if (!fs.existsSync(SERVICES_DIR)) {
  console.error('❌ Error: Services directory not found at:', SERVICES_DIR);
  process.exit(1);
}

// Count .md files in services directory
const files = fs.readdirSync(SERVICES_DIR);
const serviceFiles = files.filter(file => file.endsWith('.md'));
const count = serviceFiles.length;

console.log(`📊 Total services found: ${count}`);
console.log(`📁 Services directory: ${SERVICES_DIR}\n`);

// List all services
console.log('Services:');
serviceFiles.forEach((file, index) => {
  console.log(`  ${index + 1}. ${file}`);
});
console.log('');

// Validate count is multiple of 3
if (count === 0) {
  console.warn('⚠️  Warning: No services found!');
  console.warn('   Add at least 3 service markdown files to src/content/services/\n');
  process.exit(1);
} else if (count % 3 !== 0) {
  const nextMultiple = Math.ceil(count / 3) * 3;
  const needed = nextMultiple - count;

  console.error('❌ Validation Failed!');
  console.error(`   Services count (${count}) is not a multiple of 3.`);
  console.error(`   This will result in an incomplete grid row.\n`);
  console.error(`💡 Solution:`);
  console.error(`   Add ${needed} more service${needed > 1 ? 's' : ''} to reach ${nextMultiple} services.`);
  console.error(`   Or remove ${count % 3} service${(count % 3) > 1 ? 's' : ''} to reach ${count - (count % 3)} services.\n`);

  process.exit(1);
} else {
  const rows = count / 3;
  console.log(`✅ Validation Passed!`);
  console.log(`   ${count} services will display in ${rows} complete row${rows > 1 ? 's' : ''} of 3.\n`);
}
