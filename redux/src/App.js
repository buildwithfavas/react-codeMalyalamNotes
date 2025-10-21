import MyApp from './MyApp';
import Settings from './Settings';
import './App.css';
import { Provider } from 'react-redux';
import store from './reactRedux'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MyApp />
        <hr/>
        <br/><br/><br/><br/><br/>
        
        <Settings/>
      </Provider>
    </div>
  );
}

export default App;
