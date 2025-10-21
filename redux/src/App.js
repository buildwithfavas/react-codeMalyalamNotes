import MyApp from './MyApp';
import './App.css';
import { Provider } from 'react-redux';
import store from './reactRedux'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MyApp />
      </Provider>
    </div>
  );
}

export default App;
