import React from 'react';
import {
  Provider
} from 'react-redux';
import {
  applyMiddleware,
  createStore
} from 'redux';
import reduxThunk from 'redux-thunk';
// import async from 'middlewares/async.middleware';
// import stateValidator from 'middlewares/stateValidator.middleware';
import reducers from 'redux/reducers/index';


// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children, initialState = {
  auth: {
    authenticated: localStorage.getItem('token')
  }
}
}) => {
  const store = createStore(reducers, initialState,
    applyMiddleware(reduxThunk)
  );
  return (<Provider store={store}> {children} </Provider>)
}