import commentsReducer from 'redux/reducers/comments.reducer';
import { SAVE_COMMENT } from 'redux/actions/types.actions';

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  }

  const newState = commentsReducer([], action);
  expect(newState).toEqual(['New Comment'])
});


it('handles actions of unknown type', () => {
  const newState = commentsReducer([], { type: 'NEWUNKNOWNACTIONTYPE' });
  expect(newState).toEqual([]);

});