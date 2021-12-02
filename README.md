# generator-react-component
Generator for creating React components with related files.

## Installation

Because this generator is currently still in development, the normal process of installing it as an npm package will not work. Instead you will have to follow these steps:

First, install [Yeoman](http://yeoman.io) and clone this repo to your 
machine. Then cd into the `generate-react-component` directory and run
```bash
npm install
```
followed by
```bash
npm link
```

After `npm link` has run close the terminal window you're in and open a new one and then you should be able to use the generator. The generator expects that your project will have the following structure:

```
root
|— src
  |— components
```
So cd into the root directory of your project and run

```bash
yo react-component
```
and answer the questions when prompted. The generator should add the following files and directories inside of the `components` directory:
```
ComponentName
|— ComponentName.tsx
|- ComponentName.styles.ts
|— __dev__
   |— ComponentName.test.ts
   |— ComponentName.stories.ts
```
