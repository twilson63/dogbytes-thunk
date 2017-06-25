#### Dogbytes

# redux-thunk

## TL;DR

> Redux-Thunk is a redux middleware module, that makes it easy to do async calls 
and pass state modifications to the redux store.

## Requirements

* nodejs 
* redux

## What is a thunk?

> In computer programming, a thunk is a subroutine that is created, often automatically, to assist a call to another subroutine. Thunks are primarily used to represent an additional calculation that a subroutine needs to execute, or to call a routine that does not support the usual calling mechanism.
> -- Wikipedia

In javascript, a thunk is commonly used to delay the invocation of a function by waiting for 
some async processing to complete then take the result of that async processing and then call 
the pure function.

## What is redux middleware?

https://github.com/reactjs/redux/blob/master/docs/advanced/Middleware.md

Middleware allows you to inject subroutines between the initial call from an application 
and the actual invocation at the library level. Leveraging this concept enables many different
types of approaches to provide input to a library like redux.

## What is redux-thunk?

The redux dispatch function natively takes an `action` which is an object that has a `type` and `payload` property. This action is then processed through a series of reducers and all reducers 
must be pure functions. (No Side Effects). So you may be thinking, if redux only supports pure 
functions with no side effects, how to make calls to servers in order to get data to present in 
my application. By leveraging a middleware tool like redux thunk, we can delay the execution of the 
dispatch by passing a function, and in that function we do our async operations, and when finished
we return an action.

## How do I use redux-thunk?

First, lets look at traditional redux dispatch.

```js
// set todos 
const connector = connect(mapStateToProps, mapActionsToProps) 
export default connector(MyComponent)

function mapActionsToProps (dispatch) {
  return {
    handleSubmit: (e) => {
      dispatch({type: 'SET_TODOs', payload: [{text: 'remember milk'}]})
    }
  }
}
```

This partial code from a component is dispatching a hard coded array of TODO Items to our 
redux store. This is great, but what if we wanted to get that list from a server endpoint.
`/todos`

By using fetch we can get the array of items, but fetch is a promise, which means it is
asynchronous. 

```
fetch('http://localhost:4000/todos').then(res => res.json())
```

This is where redux thunk helps us out. Using redux thunk instead of passing an object into the 
dispatch method as an argument. We pass in a thunk function. A thunk function receives two arguments.

* dispatch - takes a redux action object - `{type, payload}`
* getState - when called returns the current state of the store.

### Example thunk function

```js
const todosThunk = function (dispatch, getState) {
  fetch('http://localhost:4000/todos').then(res => res.json())
    .then(todos => dispatch({type: 'SET_TODOS', payload: todos }))
}
```

In this function, when the result of the promise is invoked, we call the `dispatch` function 
to pass the results as a redux `action`.

We can call the todosThunk in our mapActionsToProps handler.

```js
function mapActionsToProps (dispatch) {
  return {
    handleSubmit: (e) => dispatch(todosThunk)
  }
}
```

### Setup 

Setting up redux-thunk middleware is very easy.

```
npm install redux-thunk
```

Edit your redux-store, ie `./src/store.js`

```
import thunk from 'redux-thunk'

const store = createStore(
  reducers,
  applyMiddlware(thunk)
)
```

## FAQ?

* can I use any async pattern with thunks?

Yes, you can use callbacks, promises, observers, and async/await

* does it work with other redux middleware? 

Yes it should work with other middleware without many issues, but if you 
do find an issue, please contact us.


## Demo 

In the demo, we use setTimeout to demonstrate an async function.

https://dogbytes-thunk.glitch.me/

You can see the source code for the demo in `demo/1.js` and `demo/2.js`

## See Also

* [Promises](https://glitch.com/edit/#!/dogbytes-promises)
* [Fetch](https://glitch.com/edit/#!/dogbytes-fetch)

### Was this dogbyte helpful?

We would like to hear from you [Contact Us](mailto:dogbytes@jackrussellsoftware.com)
