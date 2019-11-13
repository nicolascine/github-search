# Github search, modern web app

### Challenge: create an app that allows making searches using the Github API, collect and display data from users and show info with links to their repositories.

Stack: Typescript, React, GraphQL and Redux. Tests are made with Jest and Istambul for code coverage

### Bonnus

New features:

This project adds some features to the original requirement:

- Dynamic Themes (change css theme on demand through UI option) using native css variables
- Add animations, page transitions and elements
- Multilingual support (ES | EN | BR)
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

In the project directory, run:

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
