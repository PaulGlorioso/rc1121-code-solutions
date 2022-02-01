import React from 'react';
import ReactDom from 'react-dom';
const div = document.querySelector('#root');

const hello = React.createElement(
  'h1',
  [null],
  ['Hello, React!']
);

ReactDom.render(hello, div);
