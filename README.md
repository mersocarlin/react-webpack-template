# react-webpack-template

Get the AMD module located at `mersocarlin-template.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'MersocarlinTemplate': 'mersocarlin-template'
  }
});

require(['react', 'MersocarlinTemplate'], function(React, MersocarlinTemplate) {

  React.render(React.createElement(MersocarlinTemplate), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm run dev`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
