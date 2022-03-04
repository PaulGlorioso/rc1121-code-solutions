import React from 'react';
import ReactDom from 'react-dom';
import HotButton from './hot-button';

const div = document.querySelector('#root');
ReactDom.render(<HotButton />, div);
