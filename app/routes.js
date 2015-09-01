import React from 'react';
import { Route, DefaultRoute } from 'react-router';


import App from './containers/app';
import Home from './containers/home';


export default (
  <Route>
    <Route path="/" handler={App}>
      <DefaultRoute name="home" handler={Home} />
    </Route>
  </Route>
);
