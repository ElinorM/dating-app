import React from 'react';  
import { Route, Switch } from "react-router-dom";
import { HomePage } from './Components/HomePage/HomePage';
import { Header } from './Components/Header/Header';
import './App.css';

export function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

