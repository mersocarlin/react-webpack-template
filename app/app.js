import 'babel/register';


import React from 'react';
import { Router } from 'react-router';
import { render } from 'react-dom'
import FastClick from 'fastclick';


import routes from './routes';


import './styles/animate.css';
import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';
import 'react-select/dist/default.css';
import './styles/app.scss';


(() => {

  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body);

    //React.initializeTouchEvents(true);
    render(
      routes,
      document.getElementById("main")
    );
  });
})();
