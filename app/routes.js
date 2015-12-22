import React from 'react';
import { Route } from 'react-router';

import App from './containers/app';
import About from './containers/about';
import Home from './containers/home';
import NoMatch from './containers/no-match';


export default (
  <Route component={App}>

    <Route path="/" component={Home} />

    <Route path="about" component={About} />
    <Route path="about/:param1/test/:param2" component={About} />
    <Route path="*" component={NoMatch}/>
  </Route>
);
