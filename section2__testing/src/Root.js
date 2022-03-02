import React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import reduxPromise from 'redux-promise';
import async from 'middlewares/async.middleware';
import stateValidator from 'middlewares/stateValidator.middleware';
import reducers from 'redux/reducers/index';


// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(async, stateValidator)
  );
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

