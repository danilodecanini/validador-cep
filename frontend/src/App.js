import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <ReactNotification />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
