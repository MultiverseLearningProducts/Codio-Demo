# React Props

Let’s return to our example of [Airbnb’s homepage](https://www.airbnb.com/). In particular, let’s consider the containers that hold all the information about the rental property (outlined in red)

![Airbnb](./Airbnb.png)

In the previous lesson, we examined how this could be represented as a React component. A general structure of this code might look something like

```jsx
function rentalComponent() {
    <>
        <img src="IMAGE_LINK_HERE"/>
        <h3>LOCATION_OF_PROPERTY</h3>
        <h3>NUMBER ⭐️</h3>
        <p>NUMBER miles<p>
        <p>RENTAL_NIGHTS</p>
        <h3>$AMOUNT night</h3>
    </>
}
```

⭐️ **How do we customize each component to render unique information? With our React components, we can include some extra information on the component through properties (or often simply just called props).** Props are arguments passed into React components that allow for programmers to create many different instances of a components based on the data that is being passed in.

### What We Will Learn
- What are React props?
- How to include props in React Component
- Rendering Components with Properties

>[Video Lesson](https://www.loom.com/share/e3349a5051e94b0f98cd6d7bf3b1b886)

## Try It Out! 💻
1. Click “Run”. You should see a simple HTML page that says “Hello person!” based on the functional component that has been rendered in `index.js`.
2. Update the `Message` functional component to accept a props object and render the name instead of the word “person”. Update line 9 to pass a specific name as a prop.
3. Try adding an age prop and rendering this age in the `Message` component as well! Remember that you can only return a single JSX element.

> ***INSERT IDE CODE HERE***

## Creating Props 🖊
![syntax props](./Props%20Syntax.png)

## Assigning Props 🖊
![assigning syntax](./Assigning%20Props.png)

## #checkoutTheDocs
- **React**: [Components and Props](https://reactjs.org/docs/components-and-props.html#rendering-a-component)

## Knowledge Check ✅
1. What are React props?
    - Props are functions that attach to React components.
    - Props are arguments passed into React components.
    - Props are libraries required in React to render React components.
    - None of the above

2. Given the following code snippet, which of the following will be the value of `props`?
```jsx
function Message(props){
  return <h1> Hello, {props.name} </h1>
}

ReactDOM.render(
  <Message name="Bob"/>,
  document.getElementById("root")
)
```
- `“Bob”`
- `name = “Bob”`
- `{name: “Bob”}`