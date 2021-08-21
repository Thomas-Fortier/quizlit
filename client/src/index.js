import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from "react-router";

// Pages
import CreateQuiz from './Pages/CreateQuiz';
import Login from './Pages/Login';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path='/quiz/create' component={CreateQuiz} exact/>
      <Route path='/login' component={Login} exact/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);