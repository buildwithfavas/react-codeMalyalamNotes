import './App.css';
import { Provider } from 'react-redux';
// 1
import MyApp from './2-MyApp';
import Settings from './2-Settings';
import store from './2-reactRedux'
// 2
import Label from './3-Label';
import Settin from './3-Settings';
import store3 from './3-reactRedux';
import Buttons from './3-Buttons';
// 3
import store4 from './4-reactRedux';
import Buttons4 from './4-Buttons';
import Label4 from './4-Label';
import Settin4 from './4-Settings';
import HomePage4 from './4-Homepage';


function App() {
  return (
    <div className="App">

      {/* <Provider store={store}>
        2.react-redux
        <MyApp />
        <hr/>
        <br/><br/><br/><br/><br/>
        
        <Settings/>
          </Provider> */}
      {/* ---------------------------------------------------------- */}
      {/* 3.combineReaducers() & Action Creators
      <Provider store={store3}>
        <Settin />
        <hr /><br />
        <Label />
        <hr /><br />
        <Buttons />
      </Provider> */}
      {/* ---------------------------------------------------------- */}

      <Provider store={store4}>
        <HomePage4 />
        <hr /><br />
        <Settin4 />
        <hr /><br />
        <Label4 />
        <hr /><br />
        <Buttons4 />
      </Provider>

    </div>
  );
}

export default App;
