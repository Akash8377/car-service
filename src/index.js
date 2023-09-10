import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { ServiceContextProvider } from './context/ServiceContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//   <Auth0Provider
//   domain=""
//   clientId=""
//   redirectUri={window.location.origin}
//   cacheLocation="localstorage"
// >
  <React.StrictMode>
    <ServiceContextProvider>
      <App />
    </ServiceContextProvider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

