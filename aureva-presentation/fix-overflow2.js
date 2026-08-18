const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, 'src/presentation/slides');
const filesToFix = [
  'Slide01Aureva.tsx',
  'Slide02ClinicalOrigin.tsx',
  'Slide08BusinessModel.tsx',
  'Slide09EgyptianMarket.tsx',
  'Slide11SystemArchitecture.tsx',
  'Slide12AiPrediction.tsx',
  'Slide14ClinicalRag.tsx',
  'Slide16InterfaceIntelligence.tsx'
];

// Shrink spacing significantly to pull content up, without touching the large fonts
const MULTIPLIER = 0.65; 

filesToFix.forEach(file => {
  const filePath = path.join(slidesDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${file}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');

  const propsToScale = [
    'gap',
    'marginBottom',
    'marginTop',
    'marginLeft',
    'marginRight',
    'paddingBottom',
    'paddingTop',
    'paddingLeft',
    'paddingRight'
  ];

  propsToScale.forEach(prop => {
    const regex = new RegExp(`${prop}:\\s*(\\d+)`, 'g');
    content = content.replace(regex, (match, p1) => {
      const val = parseInt(p1, 10);
      if (val <= 4) return match; 
      return `${prop}: ${Math.round(val * MULTIPLIER)}`;
    });
  });
  
  // padding string scale
  content = content.replace(/padding:\s*'([^']+)'/g, (match, p1) => {
    const parts = p1.split(' ').map(part => {
      if (part.endsWith('px')) {
        const val = parseInt(part, 10);
        return Math.round(val * MULTIPLIER) + 'px';
      }
      return part;
    });
    return `padding: '${parts.join(' ')}'`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed overflow in target slides by reducing spacing by 0.65x.');
