import React from 'react';  
import { Route, Switch } from "react-router-dom";
import { Header } from './Components/Header/Header';
import { HomePage } from './Components/HomePage/HomePage';
import { LoginPage } from './Components/LoginPage/LoginPage';


import './App.css';

export function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
}

