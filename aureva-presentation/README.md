# AUREVA — Technical Defense Presentation

This repository contains the interactive React web presentation for the AUREVA AI platform. 
It represents a high-fidelity translation of the original AUREVA business presentation into a sophisticated, 
framer-motion driven, interactive experience.

## Development

To run the presentation locally:

```bash
npm install
npm run dev
```

The presentation is built on a 1920×1080 fixed-aspect-ratio canvas that automatically scales to fit any screen while maintaining precise composition.

### Keyboard Controls
- **Next Slide:** `Right Arrow` or `Space`
- **Previous Slide:** `Left Arrow`
- **First Slide:** `Home`
- **Last Slide:** `End`

## Deployment to GitHub Pages

This presentation is pre-configured to be deployed as a static site, perfectly suited for GitHub Pages.

1. **Vite Configuration:** The `vite.config.ts` is configured with `base: './'` to ensure all assets resolve relative to the `index.html` file, regardless of the sub-directory it is hosted in.
2. **Build:**
   ```bash
   npm run build
   ```
3. **Deploy:** Simply upload the contents of the `dist/` directory to your `gh-pages` branch, or configure your GitHub repository settings to publish from GitHub Actions pointing to the `dist/` directory.

## Architecture & Structure

- **`src/presentation/`**: Root presentation directory.
- **`src/presentation/components/`**: Layout and structural components (`PresentationShell`, `Slide`, `Navigation`).
- **`src/presentation/slides/`**: The 19 individual slides comprising the business and technical narrative.
- **`src/presentation/data/`**: Configuration registry (`slides.ts`). All slides are eagerly imported to prevent loading flashes.
- **`src/presentation/styles/`**: Global CSS, animation keyframes, and the AUREVA design tokens (`variables.css`).
