import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
import ListItem from './list/Listitem';
import Header from "./components/Header";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='app'>
    <Header />
    <div className='app-body'>
      <div className='app-list'>
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>
    <Footer />
  </div>
);
