import React from 'react';


import { FluxMixins, RouterMixins } from '../mixins';
import { Strings } from '../constants';


export default React.createClass({

  mixins: [FluxMixins, RouterMixins],

  getInitialState () {
    return {
      pageTitle: 'Home',
    };
  },

  componentDidMount () { },

  componentDidUpdate () { },

  render () {
    return (
      <div className="app">

        <a href="#/">Home</a>
        <br/>
        <a href="#/about">About</a>

        <div className="container">
          {this.props.children}
        </div>

        <footer className="page-footer">
         <div className="footer-copyright">
            <div className="container">
            {Strings.app.footerText}
            </div>
          </div>
        </footer>
      </div>
    );
  },

});
