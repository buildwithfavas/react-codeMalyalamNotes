## React Router
- Code here won't work at version 5
- Type of routers
  - BrowserRouter
  - HashRouter
- Routes, Route, Link, NavLink

- in NavLink  we can have className as function
- <NavLink className={(obj) => {
    const {
        isActive
    } = obj;
    return 'testme ' + (isActive ? 'active': '')
  }} to="/">

- in NavLink  we can have style as function
- <NavLink style={(obj) => {
   console.log(obj);
  }} to="/">


## Routing Parameters
  - useParameters
  - searchPartameters

