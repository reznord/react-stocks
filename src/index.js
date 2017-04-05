import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';

// import App from './pages/App/App';
import routes from './routes';

/* global css */
import './index.css';

render(
  // <App />, document.getElementById('root'),
  <Router history={hashHistory}>
    {routes}
  </Router>, document.getElementById('root'),
);
