# react-webpack-template

This is my template for building a ReactJS app with all the boilerplate you need to get started:

- No gulp
- No grunt


## Development

* Change the default container in `app/app.js`

```
import React from 'react';
import App from './containers/[your_default_container]';
import './styles/app.scss';

React.render(<App />, document.getElementById('main'));
```

* Change the output file name (*if you want to*) in `index.html` and `webpack.config.js`

```
<script src="./build/[your_output_file]"></script>
```

```
output: {
  path: 'build',
  publicPath: 'build/',
  filename: '[your_output_file]'
},
```

* Development server `npm run dev`
* Continuously run tests on file changes `npm run watch-test`
* Run tests: `npm test`
* Build `npm run build`
