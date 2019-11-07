# Github search, modern webapp

### Challenge: create an app that allow make searchs using the Github API, collect and display data from users and show info with links to their repositories.

Stack: Typescript, React, GraphQL and Redux. Tests are maked with Jest and Istambul for code coverage

```
Bonnus 1, new features:

This project adds two features to the original requirement:

- Themes (change css theme on demand)
- Multilingual support (ES | EN | BR)

Bonnus 2, good practices:

- Use Eslint (js/tsx code linter)
- Prettier (code formating) with an Pre-Commit hook (git)
```

## Project structue

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and the main structure is proposed by this boilerplate, also, as an component strategy use "atomic design pattern" where the main goal is divide into differents component as is posible, finding a balance between coupling and cohesion.

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

each component folder contains a directory called `__tests__` where test files are located with .test.tsx suffix.

## Available Scripts

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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Conventions

- Semantic Commit version
- Semantic versioning
- Gitflow as a git strategy
- Changelog .... blablabla
