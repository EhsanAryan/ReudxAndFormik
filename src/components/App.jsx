import React from 'react';
import Navbar from "./Navbar";
import Main from './Main';
import { Provider } from "react-redux";
import store from '../Redux/store';
import './App.css';
import { BrowserRouter } from 'react-router-dom';


const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Main />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
