// import logo from './logo.svg';
import { Provider } from 'react-redux';
import { Routes, store } from '../config';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
