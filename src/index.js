import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work
const h2 = React.createElement('h1', {}, 'An Awesome Person');
const p = React.createElement('p', {}, 'Who is learning React');
const li1 = React.createElement('li', {}, 'JavaScript');
const li2 = React.createElement('li', {}, 'React');
const li3 = React.createElement('li', {}, 'Movies');
const li4 = React.createElement('li', {}, 'Ice cream');
const ul = React.createElement('ul', {className: 'my-interests'}, [li1, li2, li3, li4]);
const meInReact = React.createElement('div', {className: 'me'}, [h2, p, ul]);
ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
