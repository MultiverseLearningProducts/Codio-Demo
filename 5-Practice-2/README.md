## Goal
In this exercise, you will be creating two components using React, and rendering them on the webpage using the pre-defined App component.

## Things to Note: 
- In this exercise, you will be writing your components in the `./src/App.js file`. 
    - The component `App` will contain all the logic we want to render to our web page.
    - The component App and Welcome and Body are being exported from the ./src/App.js file (Welcome and Body are exported so they can be tested)
    ```jsx
    export function App(){...}
    ```
- The index.js file imports the App module
    ```jsx
    import { App } from "./App";
    ```
- The index.js file renders the App module to the webpage
    ```jsx
    const app = document.getElementById("app");
    ReactDOM.render(<App />, app);
    ```

## Instructions 📝
1. Create 2 components within the App.js file: 
- `Welcome`
    - This component will return a Heading 1 element displaying “Welcome to my React App”
    - This component will also return a Paragraph element displaying “Technologies Ive learned so far”

Getting an error like this? Adjacent JSX elements must be wrapped in an enclosing tag

- `Body`
    - This component will return an Unordered List element with 3 list items. The list items can contain any three pieces of technologies you have learned before
2. Include the Welcome and Body components within the App component.
3. Your solution should look as follows:
![exemplar](./exemplar.png)