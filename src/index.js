import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
  return <div>Hello World!</div>
}

ReactDom.render(<App />, document.querySelector('.container'));
