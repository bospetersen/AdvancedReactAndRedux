import axios from 'axios';
import { AUTH_ERROR, AUTH_USER } from 'redux/actions/type.actions';


export const signup = (formProps, callback) => async dispatch => {
  const url = 'http://localhost:3090/signup';
  try {
    const response = await axios.post(url, formProps);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback()

  } catch (error) {
    console.warn(error);
    dispatch({ type: AUTH_ERROR, payload: 'Email is already registered' })
  }

};


export const signin = (formProps, callback) => async dispatch => {
  const url = 'http://localhost:3090/signin';
  try {
    const response = await axios.post(url, formProps);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback()

  } catch (error) {
    console.warn(error);
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials!' })
  }

};

export const signout = () => {
  localStorage.removeItem('token');
  return {
    type: AUTH_USER,
    payload: ''
  };
};