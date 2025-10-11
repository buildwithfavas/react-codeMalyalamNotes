import './App.css';
import MyRouter from './MyRouter';
import Home from './Pages/Home';
import Usage from './Pages/Usage';
import Settings from './Pages/Settings';
import { Chart } from './Pages/Chart';

function App() {
  return (
    <div>
      <MyRouter>
        <Home path="home" />
        <Usage path="usage" />
        <Settings path="settings" />
        <Chart path="chart" />
      </MyRouter>
    </div>
  );
}

export default App;
