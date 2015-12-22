import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Strings } from '../constants';


class App extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  }

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
  }
}


function mapStateToProps (/* state */) {
  return {};
}


export default connect(mapStateToProps)(App);
