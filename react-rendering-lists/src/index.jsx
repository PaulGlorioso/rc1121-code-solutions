import React from 'react';
import ReactDom from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

const pokemon = pokedex.map(dex =>
  <li key ={dex.number}>{dex.name}</li>
);

ReactDom.render(
  <ul>{pokemon}</ul>,
  document.getElementById('root')
);