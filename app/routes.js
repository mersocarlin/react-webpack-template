import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';
import createHistory from 'history/lib/createHashHistory';


import App from './containers/app';
import About from './containers/about';
import Home from './containers/home';
import NoMatch from './containers/no-match';


let history = createHistory({
  queryKey: false
});


export default (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>

      <Route path="about" component={About} />
      <Route path="about/:param1/test/:param2" component={About} />
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
);
