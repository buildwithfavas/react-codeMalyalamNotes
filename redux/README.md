# Redux
- Helps manage state in javascript application.
- optional to use
- Efficient in re-rendering
- Easy to add states
- Update state asynchronously
  - Thunk
- Mutable state update
  - immer

## Packages
- redux
- react-redux
- redux toolkit

## redux
- Events(onClick, onFetch) => Dispatch(action) => Reducer(state, action){return newState;} => State => Subscribe => DOM update.

## react-redux
- React Hooks:
  - useSelector() //to get state from the store
  - useDispatch() // to dispatch actions
