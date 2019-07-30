import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import AppWrapper from './app';

ReactDOM.render(
  <Provider store={store}>
    <AppWrapper></AppWrapper>
  </Provider>,
  document.getElementById('app')
);
