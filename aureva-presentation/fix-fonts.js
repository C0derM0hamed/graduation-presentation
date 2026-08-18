const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, 'src/presentation/slides');
const filesToFix = [
  'Slide02ClinicalOrigin.tsx',
  'Slide14ClinicalRag.tsx'
];

const MULTIPLIER = 0.82; // Shrink the font sizes slightly so they fit, but remain large

filesToFix.forEach(file => {
  const filePath = path.join(slidesDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${file}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(/fontSize:\s*(\d+)/g, (match, p1) => {
    const val = parseInt(p1, 10);
    return `fontSize: ${Math.round(val * MULTIPLIER)}`;
  });
  
  // also shrink maxWidth because it might force text to wrap too early now that fonts are smaller
  // wait, smaller text means it wraps LESS, so maxWidth is fine.

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed font size overflow in Slide 2 and 14.');
