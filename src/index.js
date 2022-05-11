import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

const container=document.getElementById('root')

const root=ReactDOM.createRoot(container)
root.render( <h1>Hello world</h1>)

/*ReactDOM.render(
  <h1>Hello world</h1>,
  document.getElementById('root')
  
);*/


reportWebVitals();
