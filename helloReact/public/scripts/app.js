'use strict';

console.log('App.js is running!');

var template = React.createElement(
  'p',
  null,
  'Hey, this is JSX from app.js!'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
