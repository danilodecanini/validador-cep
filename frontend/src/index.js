import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/tailwind.output.css'
import { Windmill } from '@windmill/react-ui';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Windmill light>
      <App />
    </Windmill>
  </React.StrictMode>,
  document.getElementById('root')
);
