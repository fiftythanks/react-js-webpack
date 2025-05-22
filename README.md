# Template Repository

**Linting and formatting:**

- `eslint` v8.57.1.
  - `eslint-config-airbnb-base`
  - `eslint-config-prettier`
  - `eslint-plugin-import`
  - `eslint-webpack-plugin` — To add JS linting as a pre-build step.
- `prettier` v3.5.2 (`"singleQuote": true`).
- `husky` and `lint-staged` — For pre-commit hooks.
- `stylelint` — For CSS linting.
  - `stylelint-config-sass-guidelines` — To support Sass files and lint according to the [Sass Guidelines](https://sass-guidelin.es). (This plugin has some conflicting with Prettier rules. I turned off those rules that led to conflicts in my experience and didn't bring enough value to keep up with constantly needing to turn them off for one line/file.)
  - `stylelint-config-concentric-order` — To check declaration order according to Concentric CSS.
  - `postcss` — As a dependency for stylelint-config-sass-guidelines.
  - `stylelint-webpack-plugin` — To add CSS linting as a pre-build step.

Instructions for building from scratch:

- “[Linting](https://www.theodinproject.com/lessons/node-path-javascript-linting)”, The Odin Project.
- [`eslint-config-airbnb-base`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base), GitHub.
- [ESLint v8.57.1](https://eslint.org/docs/v8.x/use/getting-started), ESLint.
- [Prettier](https://prettier.io/docs/install), Prettier.
- [`lint-staged`](https://github.com/lint-staged/lint-staged#configuration), GitHub.
- “[Getting Started](https://stylelint.io/user-guide/get-started)”, Stylelint.
- [`stylelint-config-sass-guidelines`](https://www.npmjs.com/package/stylelint-config-sass-guidelines), npm.

**webpack:**

- `webpack`
- `webpack-cli`
- `html-webpack-plugin`
- `style-loader`
- `css-loader`
- `html-loader`
- `webpack-dev-server`
- `webpack-merge`

Instructions for building from scratch:

- “[webpack](https://www.theodinproject.com/lessons/javascript-webpack)”, The Odin Project. — For basic webpack installation and configuration.
- “[Asset Management](https://webpack.js.org/guides/asset-management/)”, webpack. — For more information on asset management.
- “[Production](https://webpack.js.org/guides/production/)”, webpack. ­— For dividing webpack.config.js in three separate configs.

**Babel:**

- `babel-loader` — For webpack.
- `@babel/core`
- `@babel/preset-env`

Instructions for building from scratch:

- “[What is ES6?](https://www.theodinproject.com/lessons/node-path-javascript-what-is-es6)”, The Odin Project.
- [`babel-loader`](https://github.com/babel/babel-loader), GitHub.

**Jest:**

- `jest`
- `babel-jest`
- `@types/jest` — For VSCode intellisense.
- `jest-environment-jsdom`

Instructions for building from scratch:

- “[Getting Started](https://jestjs.io/docs/getting-started#using-babel)” (sections “[Generate a basic configuration file](https://jestjs.io/docs/getting-started#generate-a-basic-configuration-file)” and “[Using Babel](https://jestjs.io/docs/getting-started#using-babel)”), Jest.
- “[Intellisense for Jest not working in VS code](https://stackoverflow.com/questions/57874114/intellisense-for-jest-not-working-in-vs-code)”, StackOverflow.
- “[DOM Manipulation](https://jestjs.io/docs/tutorial-jquery)”, Jest.

**Sass:**

- `sass-embedded`
- `sass-loader` — For webpack.

Instructions for building from scratch:

- [`sass-embedded`](https://sass-lang.com/install/), Sass.
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/#root), webpack.
- Architecture: “7-1”. Read more on [Sass Guidelines](https://sass-guidelin.es/#architecture).

**PostCSS:**

- `postcss`
- `postcss-loader` — For webpack.
- `autoprefixer`

Instructions for building from scratch:

- [Setup](https://github.com/postcss/postcss#usage), GitHub.
- [`autoprefixer`](https://github.com/postcss/autoprefixer), GitHub.

**JSDoc:**

- `jsdoc`
- `eslint-plugin-jsdoc`

Instructions for building from scratch:

- “[Leveraging JSDoc for Better Code Documentation in JavaScript](https://www.pullrequest.com/blog/leveraging-jsdoc-for-better-code-documentation-in-javascript/)”, HackerOne Code.
- [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc), GitHub.

---

When using the template, you should remove all unnecessary webpack plugins for asset management.

I also configured some config files to work properly with .mjs extensions, so if you decide to use this template, you can use the .mjs extension with your ESM, even for tests .
