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

The production build is published to the repository's `gh-pages` branch. In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select `gh-pages` and the `/ (root)` folder, then save.

To build the site locally:

```bash
npm run build
```

The Vite `base: './'` setting keeps assets working from the repository Pages URL.

## Architecture & Structure

- **`src/presentation/`**: Root presentation directory.
- **`src/presentation/components/`**: Layout and structural components (`PresentationShell`, `Slide`, `Navigation`).
- **`src/presentation/slides/`**: The 19 individual slides comprising the business and technical narrative.
- **`src/presentation/data/`**: Configuration registry (`slides.ts`). All slides are eagerly imported to prevent loading flashes.
- **`src/presentation/styles/`**: Global CSS, animation keyframes, and the AUREVA design tokens (`variables.css`).
