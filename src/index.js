import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Provider from './context/Provider';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    (
      <BrowserRouter>
        <Provider>
          <App />
        </Provider>
      </BrowserRouter>
    ),
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
