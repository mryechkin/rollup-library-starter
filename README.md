<h1 align="center"><b>Rollup</b> Library Starter</h1>

<p align="center">
  <a href="https://github.com/mryechkin/rollup-library-starter/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/mryechkin/rollup-library-starter?style=for-the-badge" alt="GitHub" />
  </a>
</p>

<p align="center">
  <img src="https://www.misha.wtf/_next/image?url=%2Fblog%2Frollup-library-starter%2Fcover.png&w=3840&q=90" alt="Rollup logo" />
</p>

## Overview

This is a starter template for JavaScript libraries, using [Rollup](https://www.rollupjs.org/) module bundler. It generates a dual-module package (ESM + CommonJS), ready to be published to NPM.

Read the accompanying [blog post](https://www.misha.wtf/blog/rollup-library-starter) for full details on this template.

## Usage

To use this template as the base of your project, clone it using git:

```bash
git clone https://github.com/mryechkin/rollup-library-starter.git <project-name>
cd <project-name>
```

Then make it your own:

```bash
rm -rf .git && git init && npm init
git add .
git commit -m "Initial commit"
```

Install dependencies:

```bash
npm i
```

Modify and structure code inside `src` as needed.

Then, build the package:

```bash
npm run build
```

This will generate a dual-bundle package inside the `dist` folder, with both `esm` and `cjs` versions of the library code (ES Modules, and CommonJS).

## Project Structure

This template follows a file structure that generally looks like this:

```
src/
├── components/
│   ├── Component1/
│   │   ├── Component1.js
│   │   └── index.js
│   ├── Component2/
│   │   ├── Component2.js
│   │   └── index.js
│   └── index.js
├── utils/
│   └── index.js
└── index.js
```

Above, `src` is the main folder for all of the library code. Inside it there are `components` and `utils` folders, and the main `index.js` file.

The `components` and `utils` folders are there for example purposes, but you can use these as your starting point for organizing your library code.

### Barrel File (index.js)

The root-level `index.js` will be the entry point into the library. Often called a "barrel" file, it exports everything that you'd like to have included in the bundle:

```jsx
// src/index.js
export * from './components';
export * from './utils';
```

The above will export everything from `components` and `utils`, which in turn each have an `index.js` of their own.

Having this root `index.js` file is the only hard requirement for this template, as it's used by Rollup to configure the entry point of the library. When it comes to folders and how they're organized, that is entirely up to your library's needs.

### Folders

Inside `components`, there are two more folders - `Component1` and `Component2` - one for each individual component in our library. We also have an `index.js` file to specify all the exports, similar to the root one:

```jsx
// src/components/index.js
export { default as Component1 } from './Component1';
export { default as Component2 } from './Component2';
```

The above will re-export the default export of each specified folder (in this case `Component1` and `Component2`). If there were named exports, you can re-export those as well:

```jsx
// src/components/index.js
export { default as Component1, foo, bar } from './Component1';
```

The convention for the component folders is to have a main component file `Component1.js`, and an `index.js` file with the exports.

For example, for the `Button` component:

```jsx
// src/components/Button/Button.js
const Button = (props) => {
  // ...
};

export const VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

export default Button;
```

Here, we have the main `Button` component itself as the **default** export, and the `VARIANT` constant as a **named** export.

Then, inside the `Button` index file, we re-export them:

```jsx
// src/components/Button/index.js
import Button, { VARIANT } from './Button';

export default Object.assign(Button, {
  VARIANT,
});
```

Notice the `Object.assign()` above. This lets us assign the `VARIANT` constant as a static property on the `Button` component, allowing for something like this:

```jsx
import { Button } from 'my-library';

<Button variant={Button.VARIANT.SECONDARY}>I'm a SECONDARY button</Button>;
```

This convention allows for a clean way to organize your modules, and works great with Rollup. Rollup will also warn you if there are any circular dependencies in your modules.

For more details, see the [blog post](https://www.misha.wtf/blog/rollup-library-starter#folder-structure).

## Plugins

This template includes the following [Rollup](https://www.rollupjs.org/) plugins:

- [`@rollup/plugin-alias`](https://www.npmjs.com/package/@rollup/plugin-alias)
- [`@rollup/plugin-babel`](https://github.com/rollup/plugins/tree/master/packages/babel)
- [`@rollup/plugin-commonjs`](https://www.npmjs.com/package/@rollup/plugin-commonjs)
- [`@rollup/plugin-node-resolve`](https://www.npmjs.com/package/@rollup/plugin-node-resolve)
- [`@rollup/plugin-terser`](https://www.npmjs.com/package/@rollup/plugin-terser)
- [`rollup-plugin-analyzer`](https://www.npmjs.com/package/rollup-plugin-analyzer)
- [`rollup-plugin-preserve-directives`](https://github.com/Ephem/rollup-plugin-preserve-directives)

And the following [Babel](https://babeljs.io) plugins:

- [`@babel/plugin-transform-runtime`](https://babeljs.io/docs/babel-plugin-transform-runtime/)
- [`@babel/preset-env`](https://babeljs.io/docs/babel-preset-env.html)
- [`@babel/preset-react`](https://babeljs.io/docs/babel-preset-react)

## Rollup Config

For details of all the configuration options used in this template, please see the accompanying [blog post](https://www.misha.wtf/blog/rollup-library-starter).

## Author

[Mykhaylo Ryechkin](https://github.com/mryechkin)

<a href="https://www.buymeacoffee.com/mryechkin" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## License

[MIT](https://choosealicense.com/licenses/mit/)
