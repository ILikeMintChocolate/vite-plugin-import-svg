# vite-plugin-import-svg

[![npm](https://img.shields.io/npm/v/vite-plugin-import-svg.svg)](https://www.npmjs.com/package/vite-plugin-import-svg)

Vite plugin to import svg file as SVGElement format

## Installation

```sh
npm install --save-dev vite-plugin-import-svg
```

## Usage

Add the plugin to ```vite.config.js```.

```js
import importSvg from "vite-plugin-import-svg";

export default {
  plugins: [importSvg()],
  // ...
};
```

You can import svg files as SVGElement format.

```js
import icon from "./icon.svg?element"

// Before version 0.0.4, use it like this:
console.log(icon) // → <svg xmlns="http://www.w3.org/2000/svg">...</svg> as SVGElement

// Starting from version 0.1.0, use it like this:
console.log(icon()) // → <svg xmlns="http://www.w3.org/2000/svg">...</svg> as SVGElement
```

If you're using Typescript, add the declaration code to ```vite-env.d.ts```

```ts
/// <reference types="vite-plugin-import-svg" />
```

## License

MIT