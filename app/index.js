import 'babel-polyfill';
import { render } from 'react-dom';
import FastClick from 'fastclick';


import routes from './routes';


import './styles/animate.css';
import './styles/app.scss';


(() => {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body);

    // React.initializeTouchEvents(true);
    render(routes, document.getElementById('main'));
  });
})();
