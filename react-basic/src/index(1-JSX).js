import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';

//===============> JSX <==========================

// Can create this way by using React.createElement();
const divElement = React.createElement("div", { id: "my-hello" },
  React.createElement("div", {},  //child element
  "Hello"
)
);

// Can create this way by using JSX;   //behind seen this element converted to React.createElement() then to document.createElement()
const divElement2 = <div id="my-hai">
  <h1>My Title</h1>
</div>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   divElement,
// );

//===============> JSX Features <==========================

//class => className
//for => htmlFor
//{} => expressions or for types except string
//camelCase for css
//Key is needed when return an array(for Lists)
//Event call back

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  divElement,
);
