import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import './App.css';
import { Navbar } from './components';
import Menu from './components/Menu/Menu';
import Homepage from './components/Homepage';
import Menus from './components/Menu/Menu';
import Routing from './components/Routing';

const App = () => (
  <div>
    <Routing/>
  </div>
);

export default App;
