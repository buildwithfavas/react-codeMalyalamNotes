import './App.css';
//import MyRouter from './MyRouter';
import Home from './Pages/Home';
import Usage from './Pages/Usage';
import Settings from './Pages/Settings';
import Users from './Pages/Users';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        {/* <MyRouter>
        <Home path="home" />
        <Usage path="usage" />
        <Settings path="settings" />
        <Chart path="chart" />
      </MyRouter> */}
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='settings' element={<Settings />} />
        <Route path='usage' element={<Usage />} />
        <Route path='users' element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
