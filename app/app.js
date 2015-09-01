import 'babel/register';

import React from 'react';
import FastClick from 'fastclick';

import routes from './routes';
import router from './utils/router';

import './styles/animate.css';
import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';
import 'react-select/dist/default.css';
import './styles/app.scss';


(() => {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body);

    React.initializeTouchEvents(true);

    router.create(routes);
    router.run((Handler, state) => {

      state.routes.filter((route) => {
        return route.handler.routeAction;
      }).forEach((route) => {
        route.handler.routeAction(state.params);
      });

      React.render(<Handler params={state.params} />, document.body);
    });
  });
})();
