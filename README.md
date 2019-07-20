# React TypeScript NPM Boilerplate

This is a boilerplate project for writing React NPM modules (or component libraries) in TypeScript. The code is compiled and published to NPM via CircleCI v2 Workflows and Github Releases. 

This boilderplate includes a [Storybook](https://storybook.js.org/) to visualize and demonstrate your components. The Storybook is automatically deployed to [Zeit](https://zeit.co) once configured (see the Storybook for this template [here](https://react-ts-module-boilerplate.develohpanda.now.sh)). This allows you to test each PR visually and in isolation.

# Features
- [TypeScript](tsconfig.json) with automatic linting via [ESLint](.eslintrc) + [Prettier](.prettierrc)
- Unit testing with [Jest](https://jestjs.io/) + [Enzyme](https://airbnb.io/enzyme/)
- [Storybook](https://storybook.js.org/) + hot reloading, including the addons [Actions](https://github.com/storybookjs/storybook/tree/master/addons/actions), [Knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs), [Storysource](https://github.com/storybookjs/storybook/tree/master/addons/storysource), [Notes](https://github.com/storybookjs/storybook/tree/master/addons/notes),  [Viewport](https://github.com/storybookjs/storybook/tree/master/addons/viewport), [Console](https://github.com/storybookjs/storybook-addon-console), and [Centered](https://github.com/storybookjs/storybook/tree/master/addons/centered). I have also included various [utilities](stories/utilities) for creating stories.
- Automatic Storybook deployment to [Zeit](https://zeit.co) via [Now for GitHub](https://zeit.co/github) for all branches and PRs
- Continuous Integration via [Circle CI](.circleci/config.yml)
- NPM publishing via [GitHub Releases](/releases) (version must follow the `v.*.*.*` pattern)
- Editor [settings](.vscode) for VS Code
- [Bootstrap](https://getbootstrap.com/) & [Reactstrap](https://reactstrap.github.io/)
- [Yarn](https://yarnpkg.com/en/)

# Usage

1. Fork or clone this repository
2. If using VS Code, install recommended extensions
3. `yarn install`
4. `yarn start`
5. Create your components
6. Export your components in [`index.ts`](index.ts)
7. Publish your module by creating a new GitHub Release (with a `v.*.*.*` version number). CircleCI will automatically build and deploy.

## `yarn` Scripts
- `test` - _run unit tests_
- `test:cover` - _run unit tests with test coverage_
- `lint` - _check `eslint` and `prettier` rules_
- `lint:fix` - _autofix unmet `eslint` and `prettier` rules_
- `local-pack` - _create the `tgz` package locally to test consumers without publishing_
- `start` - _start the storybook server and automatically open in browser_
- `compile` - _standard typescript compile `tsc`_
- `now-build` - _used by Zeit when building your storybook for deployment (do not rename this script)_

Before each commit, `husky` and `lint-staged` will automatically lint your staged `ts, tsx, js, jsx` files.

# Configuration

## Circle CI
You need to configure one [environment variable](https://circleci.com/docs/2.0/env-vars/) in CircleCI, for publishing to NPM.
- `NPM_TOKEN`

## Zeit
You need to authorize [Zeit](https://zeit.co/github-setup) with your GitHub account to enable automatic deployments. Once configured, you can enable Zeit to deploy any repository that contains a `now.json` file.

## Dependabot (optional)
I recommend enabling [Dependabot](https://dependabot.com/) on this repository to keep your dependencies up to date. Each dependency update will be created as a PR, which will automatically validate via Circle CI and you can manually validate via Zeit.

# License

This code is released under the [MIT license](LICENSE.md) - feel free to use it.

# Contribute

Please contribute any improvements or fixes to this project!

To make sure you have a pleasant experience, please read the [code of conduct](CODE_OF_CONDUCT.md). It outlines core values and beliefs and will make working together a happier experience.
