# Rollup Library Starter

[![GitHub](https://img.shields.io/github/license/mryechkin/rollup-library-starter?style=for-the-badge)](https://github.com/mryechkin/rollup-library-starter/blob/main/LICENSE)

Starter template for building JavaScript libraries using [Rollup](https://www.rollupjs.org/)

Read the [blog post](https://www.misha.wtf/blog/rollup-library-starter) for details.

## Usage

To use this template as the base of your project, clone it using git:

```
git clone https://github.com/mryechkin/rollup-library-starter.git <project-name>
cd <project-name>
```

Then make it your own:

```
rm -rf .git && git init && npm init
git add .
git commit -m "Initial commit"
```

Install dependencies:

```
npm i
```

Modify and structure code inside `src` as needed.

Then, build the package:

```bash
npm run build
```

This will generate a dual-bundle package inside `dist`, with both `esm` and `cjs` versions of the library code.

## Author

- [Mykhaylo Ryechkin](https://github.com/mryechkin)

## License

[MIT](https://choosealicense.com/licenses/mit/)
