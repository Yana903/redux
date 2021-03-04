import React from 'react';
import App from './App';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import {BrowserRouter, StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

    ReactDOM.render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>,
    document.getElementById('root')
  );
