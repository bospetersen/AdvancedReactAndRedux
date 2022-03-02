// Boilerplate middleware function declaration
// export default ({ dispatch }) => next => action => { };
// -----------------------------------------------------------
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ dispatch }) => next => action => {
  if (!action.payload || !action.payload.then) {
    return next(action)
  }

  action.payload.then(function (response) {
    const newAction = { ...action, payload: response }
    dispatch(newAction);
  });

};

