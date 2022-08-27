import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Header from "./Header"
import Home from './Home';
import ServerInfo from './ServerInfo';
import maidBg from '../images/background.jpg';

function App() {
  return (
    <div>
      <img src={maidBg} className="maidBg" style={{position:"fixed"}}/>
      <div className='container-xl'>
      <BrowserRouter>
        <Header />
        <Routes>
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
  