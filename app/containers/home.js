import React from 'react';


import { FluxMixins, RouterMixins } from '../mixins';


export default React.createClass({

    mixins: [ FluxMixins, RouterMixins ],

    handleClick () {
      this.transitionTo("/about", { q1: 1, q2: "test" });
    },

    render() {
      return (
        <div className="app-page page-home">
          Home Page

          <br/>
          <a onClick={this.handleClick}>About with query</a>
        </div>
      );
    }

  });
