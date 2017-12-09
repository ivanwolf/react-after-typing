# react-after-typing

This HOC add a callback function to an input component. The function is called right after the user stop typing.

## What it solves

Some uses case are instant form validation and applying a filter to a list.

## Usage

```bash
$ yarn add react-after-typing
```

```js
import afterTyping from 'react-after-typing':

// Define your input
const Input = props => (
  <input type="text" {...props} />
);

// Enhance it
const InputWithCallback = afterTyping(Input);
```

```js
// Add the callback prop
render() {
  return (
    <InputWithCallback afterTyping={() => console.log('Hola')}/>
  )
}
```

***

## < EnhancedInput />

### Props

- **afterTyping: Function**

    The the function to be called.

- **time: Integer**

    Optional. Number of ms waited before firing the function, defaults to 500.