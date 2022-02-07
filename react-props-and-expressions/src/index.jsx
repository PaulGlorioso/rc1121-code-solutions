import React from 'react';
import ReactDom from 'react-dom';

const div = document.querySelector('#root');
function CustomButton(props) {
  return (
      <button>{props.text}</button>
  );
}

const element = (
  <div>
    <CustomButton text="I" />
    <CustomButton text="know" />
    <CustomButton text="React!" />
  </div>
);

ReactDom.render(
  element,
  div
);
