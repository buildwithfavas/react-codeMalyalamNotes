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
- React Hooks(For functional components):
  - useSelector() //to get state from the store
  - useDispatch() // to dispatch actions

- Class components:
- connect()

## combineReaducers() & Action Creators
- combineReducers() is a Redux helper function that lets you split your Redux state and logic into multiple smaller reducers, then combine them into one main reducer.   (Merges multiple reducers into one root reducer)

- An Action Creator is just a function that returns an action object.

