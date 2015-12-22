import React, { Component } from 'react';
import { connect } from 'react-redux';


class About extends Component {
  render () {
    const { query } = this.props.location;
    const params = this.props.params;

    return (
      <div className="app-page page-about">
        About Page <br/>

        <div>
          Query: {JSON.stringify(query)}
        </div>

        <div>
          Params: {JSON.stringify(params)}
        </div>
      </div>
    );
  }
}


export default connect((/* state */) => {
  return {

  };
})(About);
