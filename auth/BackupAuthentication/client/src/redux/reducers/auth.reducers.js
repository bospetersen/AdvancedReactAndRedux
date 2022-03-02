import { AUTHENTICATED, AUTH_USER, AUTH_ERROR } from 'redux/actions/type.actions';

const INITIAL_STATE = {
  authenticated: '',
  erroMessage: ''
}


// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTHENTICATED:
      return action.payload
    case AUTH_USER:
      return { ...state, authenticated: action.payload };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}