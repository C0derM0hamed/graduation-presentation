const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, 'src/presentation/slides');
const filesToFix = [
  'Slide06WhyAureva.tsx',
  'Slide07UsersCustomers.tsx',
  'Slide15GroundedGeneration.tsx'
];

const MULTIPLIER = 0.75; // Shrink spacing back down

filesToFix.forEach(file => {
  const filePath = path.join(slidesDir, file);
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

console.log('Fixed overflow in target slides by reducing spacing.');
