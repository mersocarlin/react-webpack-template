import React from 'react';
import ReactRouter from 'react-router';
import { RouteHandler } from 'react-router';


import FluxMixins from '../mixins/flux';
import router from '../utils/router';
import { Strings } from '../constants';


export default React.createClass({

  mixins: [ FluxMixins, ReactRouter.State ],

  getInitialState () {
    return {
      pageTitle: "Home"
    }
  },

  componentDidMount () {
  },

  componentDidUpdate () {
  },

  render () {
    return (
      <div className="app">

        <div className="container">
          <RouteHandler />
        </div>

        <footer className="page-footer">
         <div className="footer-copyright">
            <div className="container">
            {Strings.App.FooterText}
            </div>
          </div>
        </footer>
      </div>
    );
  }

});
