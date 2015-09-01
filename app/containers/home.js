import React from 'react';


import router from '../utils/router';
import FluxMixins from '../mixins/flux';
import { Status, Strings } from '../constants';


export default React.createClass({

    mixins: [ FluxMixins ],

    render() {
      return (
        <div className="app-page page-home">
          Home Page
        </div>
      );
    }

  });
