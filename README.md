# Animated loaders

A collection of React components featuring animated SVG icons. Designed to be easily integrated and customized. [You can visit the storybook catalog](https://mentemaesta.github.io/animated-loaders/)

> ⚠️ It uses svg path changes animations which are only supported by chromium based browsers

## 🚀 Quick start

### Installation

```bash
npm install animated-loaders
# or
yarn add animated-loaders
```

### Usage

```jsx
import { AnglerFishSvg, LoaderWrapper } from 'animated-loaders';

function App() {
  return (
    <LoaderWrapper>
      <AnglerFishSvg />
    </LoaderWrapper>
  );
}
```

For more examples and customization options, see [the docs section in this storybook demo](https://mentemaesta.github.io/animated-loaders/).

## 📚 Stack

Here's a breakdown of the key technologies and tools used:

- **React**: Powers the UI components.
- **Rollup**: Bundles the code efficiently.
- **TypeScript**: Adds type safety and enhances developer experience.
- **Storybook**: Facilitates UI component development and testing.
- **SVG and Path Animations**: Enables high-quality animations. Note: Path animations are optimized for Chromium browsers.
- **PostCSS**: Processes CSS for styling components.

## 🔎 What's inside?

A quick look at the top-level files and directories:

```
.
├── src
│   ├── All
│   ├── AnglerFishSvg
│   ├── BloDuckSvg
│   ├── CatTailSvg
│   ├── FlowerSvg
│   ├── GhostCatSvg
│   ├── LoaderWrapper
│   ├── SeaDogSvg
│   └── shared
└── index.js
```

## 🤝 Contributing

If you encounter an issue with the animated icons, please open an issue in this repository.

## 📄 License

This project is licensed under the MIT License - see the [`LICENSE`](https://github.com/menteMaesta/animated-loaders/blob/main/LICENSE) file for details.
