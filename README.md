# udemy-react-testing-starter

The first project from the Udemy course [React Testing Library with Jest / Vitest](https://www.udemy.com/course/react-testing-library)

## How this project was created

This project was created using this command:

```sh
npm create vite@latest udemy-react-testing-starter -- --template react-ts
```

and then following all of the steps below.

I also removed a few unnecessary files, and updated

- App.tsx
- this README file 😄

## Installing Vitest and React Testing Library in a Vite project

### Install dependencies

```sh
npm install -D vitest @vitest/ui eslint-plugin-vitest
npm install -D jsdom @testing-library/jest-dom @testing-library/react
```

## Add test script to package.json `test` object

```json
  "test": "vitest --watch",
```

## Add a setup file

To make [jest-dom matchers](https://github.com/testing-library/jest-dom#custom-matchers) available in all test files:

1. create new file _src/testsConfig.ts_
1. add these contents:

```js
import "@testing-library/jest-dom"
```

## Update vite configuration for tests

So in the course we were advised to add the vitest config to the vite config file. However this resulted in an error and [further research](https://stackoverflow.com/questions/72146352/vitest-defineconfig-test-does-not-exist-in-type-userconfigexport) of this led me to discover on [vitest's page](https://vitest.dev/config/file.html) that they recommend having a separate vitest config that extends vite's.

## Command to run tests

```sh
npm test
```

## Reference

- [creating a Vite project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
- [Vitest Testing Library example](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib)
- [Vitest ESLint plugin](https://www.npmjs.com/package/eslint-plugin-vitest)
- [Testing Library Documentation](https://testing-library.com/)
