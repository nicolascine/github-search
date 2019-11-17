[![Netlify Status](https://api.netlify.com/api/v1/badges/077542c3-a8f4-4f19-b252-ba98df7b643f/deploy-status)](https://app.netlify.com/sites/github-search-react/deploys)

# Github search, modern web app

### Challenge: create an app that allows making searches using the Github API, collect and display data from users and show info with links to their repositories.

Stack: Typescript, React, GraphQL and Redux. Tests are made with Jest and Istambul for code coverage

:white_check_mark: Live version: [github-search-react.netlify.com](https://github-search-react.netlify.com)

### Bonnus

New features:

This project adds some features to the original requirement:

- Dynamic Themes (change css theme on demand through UI option) using native css variables
- Add animations, page transitions and elements
- Multilingual support (EN | BR | ES)
- Fully responsive, without frameworks (using native flexbox css)
- Apply guides for accesibility (WAI-ARIA standard)
- [Progresive web app](https://developers.google.com/web/progressive-web-apps)
- Persist settings on localStorage

Good practices

- Use Eslint (code linter with support for Typescript)
- Prettier (code formatting) with a Pre-Commit hook (git)
- [Semantic Commit Messages](https://www.conventionalcommits.org/en/v1.0.0/)

## Project structure

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and the main structure is proposed by this boilerplate, also, as a component strategy use "atomic design pattern" where the main goal is divide into differents component as is possible, finding a balance between coupling and cohesion.

```
├── App.test.tsx
├── App.tsx
├── assets
├── common
│   ├── Logo
│   │   └── index.tsx
│   ├── Search
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   └── index.tsx
├── config.tsx
├── index.tsx
├── pages
│   ├── home
│   └── results
│       ├── components
│       │   ├── Avatar.tsx
│       │   ├── Info.tsx
│       │   ├── Result.tsx
│       │   ├── Sidebar.tsx
│       │   └── index.tsx
│       └── index.tsx
├── react-app-env.d.ts
├── serviceWorker.ts
└── styles
    ├── index.scss
    └── variables.scss
```

Each component folder contains a directory called `__tests__` where test files are located with .test.tsx suffix.

## Installation

Add `.env` file with your Github Token

```
REACT_APP_GITUHB_API_TOKEN=___YOUR_TOKEN_HERE___
```

After that, in the project directory, run:

### `npm install`

this command will install all needed project dependencies

## Available commands (after installation)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Conventions

    - Semantic Commit Messages
    - Semantic versioning
    - Gitflow, as a git strategy
    - Changelog [Standard Version]

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.2.0](https://github.com/nicolascine/github-search/compare/v1.1.2...v1.2.0) (2019-11-17)

### Features

- add :hover style over button ([8b5623c](https://github.com/nicolascine/github-search/commit/8b5623c577c30c478331882ece291212c1702ed3))
- add 'connected-react-router' to manage routes as value on redux store ([d253fcf](https://github.com/nicolascine/github-search/commit/d253fcfb479091744745a57b11ce9e7c12a41c8d))
- add basic redux implementation ([d5c3d2b](https://github.com/nicolascine/github-search/commit/d5c3d2b6acc75918fdcec72a50c073c62e557287))
- add graphql.macro to load .graphql files. This change adds best readability ([76e7f5f](https://github.com/nicolascine/github-search/commit/76e7f5f880823f93efe49488ad3c29d06695f9b5))
- add mapStateToProps to results page component ([72475f3](https://github.com/nicolascine/github-search/commit/72475f381cfc689242b32763d1537b3cd9ca6478))
- add UserInfo reducer and store data from fetch GraphQL Hook ([3d0c300](https://github.com/nicolascine/github-search/commit/3d0c3009a56a3ef77ba641255d74857cf4c9998a))
- display data from redux store, remove values directly from graphql query component ([0576679](https://github.com/nicolascine/github-search/commit/0576679f0d90a956883e20e3d88c251771ccd36e))
- improve components file structure ([a1cab67](https://github.com/nicolascine/github-search/commit/a1cab679b28e5e4fef043409e2420d72d9517cc0))
- improve Redux implementation. Add data from GraphQL fetch Hook ([bd752c7](https://github.com/nicolascine/github-search/commit/bd752c7db4e81ea146da464122fb32976c6d73b1))

### Bug Fixes

- set right current lang value ([65e9f34](https://github.com/nicolascine/github-search/commit/65e9f344dbd1938ece575ced29b31b0d9e403314))

### [1.1.2](https://github.com/nicolascine/github-search/compare/v1.1.1...v1.1.2) (2019-11-14)

### [1.0.1](https://github.com/nicolascine/github-search/compare/v0.1.1...v1.0.1) (2019-11-13)
