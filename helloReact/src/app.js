console.log('App.js is running!')

var template = <p>Hey, this is JSX from app.js!</p>
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);