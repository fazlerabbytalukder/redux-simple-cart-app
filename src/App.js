import { Provider } from 'react-redux';
import './App.css';
import Shop from './components/Shop/Shop';
import store from './redux/Store';

function App() {
  return (
    <Provider store={store}>
      <Shop/>
    </Provider>
  );
}

export default App;
