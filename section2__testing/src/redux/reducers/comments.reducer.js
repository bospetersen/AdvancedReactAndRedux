import { SAVE_COMMENT, FETCH_COMMENTS } from 'redux/actions/types.actions';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENTS:
      const comments = action.payload.data.map(comment => comment.name);
      return [...comments, ...state];
    default:
      return state;
  }
}