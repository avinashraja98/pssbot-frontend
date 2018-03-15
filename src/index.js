import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Open Sans', 'sans-serif']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));