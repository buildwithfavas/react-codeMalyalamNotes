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

## Relative Path
- Default Route
- useNagivate

- Path
  - Absolute path starts with '/' => it adds route to the root eg: (https://localhost:3000/login  to https://localhost:3000/home) 
  - Relative path don't have '/' => it adds route to the existing route eg: (https://localhost:3000/login  to https://localhost:3000/login/home) 

  - . => Current route
  - ..=> Parent route

- useNavigate
- useLocate


