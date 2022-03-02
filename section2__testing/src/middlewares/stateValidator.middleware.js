// Boilerplate middleware function declaration
// export default ({ dispatch }) => next => action => { };
// -----------------------------------------------------------
import stateSchema from 'middlewares/validators/stateSchema';
import tv4 from 'tv4';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  dispatch, getState
}) => next => action => {
  next(action);

  const isValid = tv4.validate(getState(), stateSchema);
  if (!isValid) {
    console.warn('Something invalid is trying to be added to the state object!')
  }
};