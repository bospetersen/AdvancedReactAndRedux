import { combineReducers } from 'redux';
import commentsReducer from 'redux/reducers/comments.reducer';
import authReducer from 'redux/reducers/auth.reducer';

export default combineReducers({
  comments: commentsReducer,
  auth: authReducer
});