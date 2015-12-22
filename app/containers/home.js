import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Home extends Component {
  componentDidMount () {
    this.test();
  }

  request () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('123');
      }, 5 * 1000);
    });
  }

  async test () {
    let t = await this.request();
    if (t === 'aaa') {
      t = 0;
    }
    const arr = [1, 2, 3, 4, 5];
    let find = arr.find(item => item > 2 && item < 4);
    if (find === 0) {
      find = 1;
    }
  }

  render () {
    const param1 = '123';
    const param2 = 456;

    return (
      <div className="app-page page-home">
        Home Page

        <br />
        <Link to={`/about?q1=${param1}&q2=${param2}`}>About (query)</Link>
        <br />
        <Link to={`/about/${param1}/test/${param2}`}>About (params)</Link>
      </div>
    );
  }
}

export default connect((/* state */) => {
  return {

  };
})(Home);
