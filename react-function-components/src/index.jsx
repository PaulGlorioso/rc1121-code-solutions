import React from 'react';
import ReactDom from 'react-dom';

const div = document.querySelector('#root');
function CustomButton() {
  return (
    <div>
      <button>Click me!</button>
    </div>
  );
}

ReactDom.render(<CustomButton />, div);
