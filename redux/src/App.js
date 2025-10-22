import MyApp from './2-MyApp';
import Settings from './2-Settings';
import './App.css';
import { Provider } from 'react-redux';
import store from './2-reactRedux'
import Label from './3-Label';
import Settin from './3-Settings';
import store3 from './3-reactRedux';
import Buttons from './3-Buttons';

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

      {/* 3.combineReaducers() & Action Creators */}
      <Provider store={store3}>
        <Settin />
        <hr /><br />
        <Label />
        <hr /><br />
        <Buttons />
      </Provider>
    </div>
  );
}

export default App;
