# Redux Lifecycle

![](http://i66.tinypic.com/24gvpxz.png)

# Redux Middleware

![](http://i66.tinypic.com/hswf2u.png)

![](http://i67.tinypic.com/aln8k8.png)

# Redux-thunk

![](http://i68.tinypic.com/2lk8s47.png)

# Rules of Reducers

![](http://i65.tinypic.com/33xe8w7.png)

## Must return _any_ value besides 'undefined'

Basically, you should **always** return valid objects/arrays/values **or** empty objects `{}`, empty arrays `[]` or `null` values.

As such, the first argument to a reducer should have a default parameter , like so:

```javascript
const exampleReducer(exampleValue = null, action) {
    if (action.type === 'EXAMPLE_ACTION')
        return action.payload

    return exampleValue;
}
```

## Produces 'state', or data to be used inside of your app using only previous state and the action

When a reducer gets called for the first time, it's default 'state' value will be either `[]`, `{}`, or `null`.

As the action gets processed, it will generate a new piece of state from `action.payload`
And all subsequent calls to the reducer will have the previous piece of state. 

### First time a reducer is called

![](http://i64.tinypic.com/ab45f7.png)

### Second time a reducer is called

![](http://i65.tinypic.com/jux2ko.png)

## Must not 'reach out of itself' to decide what value to return (reducers are pure functions)

The reducer is a pure function that takes the previous state and an action, and returns the next state.

Pure functions only return values based on its arguments.

A pure function should **never** make an API request, or call another function to determine its return value.

## Do not mutate its 'input' state argument

This refers to: If you mutate the input state argument `const exampleReducer(state, action) => state.name = 'Mutation'`, redux will receive this new state, it will compare it to the old state and it will return false. The returned state is not different from the previous one, and as such, no rerenders should be made. Even if you make changes to the state (add or delete from it), the comparison between `oldState === newState` will still return false. 

Why?

Because objects are passed by reference in javascript.

> This is an example of updating a property on an object

```javascript
const milk = { type: 'milk' }
const chocolateMilk = milk
// 'chocolateMilk' points to a reference to 'milk', in memory
chocolateMilk.flavour = 'chocolate'
// since 'chocolateMilk' points to milk, you are essentially changing 'milk' here

console.log(milk)
// prints: {type: "milk", flavour: "chocolate"}
console.log(chocolateMilk)
// prints: {type: "milk", flavour: "chocolate"}
console.log(milk === chocolateMilk)
// prints: true
```

Basically, when you do this `const chocolateMilk = milk`, you can treat `chocolateMilk` as if it was an alias to `milk`. Any changes you make to `chocolateMilk` will reflect back into `milk`

https://alistapart.com/article/why-mutation-can-be-scary

## Safe State Updates in Reducers

![](http://i67.tinypic.com/28rh3yq.png)

The difference between **Bad** and **Good** is that:
- All methods in **Good** return a new object/array;
- And method in **Bad** return the same array but mutated.

# Passing state from redux to react

Everytime you want to pass state from redux to react, you need to `mapStateToProps` and pass it off as an argument to `connect`

# Memoization

Commit #: edfff32138a4fdc7bfdfed17edfd685ef87a67fe

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
