// scripts/generate-location-images.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

// Read and strip BOM if present
const projectJsonRaw = fs.readFileSync(path.join(projectRoot, 'src/data/project.json'), 'utf-8');
const projectJsonClean = projectJsonRaw.replace(/^\uFEFF/, ''); // Remove BOM
const projectData = JSON.parse(projectJsonClean);

const serviceName = projectData.industry?.serviceName?.toLowerCase().replace(/\s+/g, '-') || 'broker';
const locationsDir = path.join(projectRoot, 'src/content/locations');
const imagesDir = path.join(projectRoot, 'src/assets/images/locations');
const defaultImage = path.join(imagesDir, 'default.png');

function getLocationFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...getLocationFiles(fullPath));
    } else if (item.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

const locationFiles = getLocationFiles(locationsDir);
console.log(`\nFound ${locationFiles.length} location files\n`);

locationFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  const cityNameMatch = content.match(/city_name:\s*["']?([^"'\n]+)["']?/);
  
  if (cityNameMatch) {
    const cityName = cityNameMatch[1];
    const citySlug = cityName.toLowerCase().replace(/\s+/g, '-');
    
    const customImage = `${citySlug}-${serviceName}.png`;
    const customPath = path.join(imagesDir, customImage);
    const autoImage = `${citySlug}-${serviceName}-auto.png`;
    const autoPath = path.join(imagesDir, autoImage);
    
    if (fs.existsSync(customPath)) {
      console.log(`✓ Custom: ${customImage}`);
    } else if (fs.existsSync(autoPath)) {
      console.log(`- Auto: ${autoImage}`);
    } else {
      fs.copyFileSync(defaultImage, autoPath);
      console.log(`✨ Created: ${autoImage}`);
    }
  }
});

console.log('\nDone!\n');
