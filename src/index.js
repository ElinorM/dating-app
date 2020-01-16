import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux"
import "normalize.css";
import './index.css';

import { App } from "./App";
import store from "./Redux";

ReactDOM.render(
    <Router>
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>
    </Router>,
    document.getElementById("root")
  );
