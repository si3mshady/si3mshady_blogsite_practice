import React, {useState, useEffect} from 'react'
import TopBar from './components/topbar/TopBar'
import HomePage from './pages/home/Home'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router> 
        <TopBar />  
          <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/write">
          <Write />
          </Route>


          <Route  exact path="/register">
            {user ? <HomePage /> : <Register />}
          </Route>

          <Route  exact path="/login">
          {user ? <HomePage /> : <Login />}
          </Route>

          <Route  path="/post/:postId">
            <Single />
          </Route>

         

          <Route exact path="/settings">
          {user ? <Settings /> : <Register />} 
          </Route>


          


          </Switch>   
   
    </Router>
  );
  }

export default App;
