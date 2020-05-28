/* eslint-disable no-unused-vars */
import React from 'react';

import './App.css';


import Navbar from "./components/Navbar";

import Home from "./pages/Home.js";
import Room from "./pages/Room.js";
import Register from "./pages/Register.js";
import Print from "./pages/Print.js";
import Error from "./pages/Error.js";
import Trial from "./components/trial";
import Display from './components/display';
import AddRoom from "./pages/addroom.js";
import Printadd from "./pages/printadd.js";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <Switch>

    <Route exact path = '/' component = {Home} />
    <Route exact path = '/room/' component = {Room} />
    <Route exact path = '/register/' component = {Register} />
    <Route exact path = '/booked/' component = {Print} />
    <Route exact path = '/trial/' component = {Trial} />
    <Route exact path = '/display' component = {Display} />
    <Route exact path = '/addroom' component = {AddRoom} />
    <Route exact path = '/printadd' component = {Printadd} />
    <Route component = {Error} />
    </Switch>
        </>
  );
}

export default App;