import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work
const title = React.createElement('h1', {}, "An Awesome Person")
const paragraph = React.createElement('p', {}, 'Who is learning React')
const ul = React.createElement('ul', {className: 'my-interests'},
              [
                React.createElement('li', {}, 'JavaScript'),
                React.createElement('li', {}, 'React'),
                React.createElement('li', {}, 'Movies'),
                React.createElement('li', {}, 'Ice cream')
              ])

const meInReact = React.createElement('div', {className: 'me'}, [title, paragraph, ul])

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
