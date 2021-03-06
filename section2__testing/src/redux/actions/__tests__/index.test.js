import { saveComment } from 'redux/actions/index';
import { SAVE_COMMENT } from 'redux/actions/types.actions';

describe('Save comment', () => {
  it('has the correct type', () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('has the correct payload', () => {
    const action = saveComment('New Comment');
    expect(action.payload).toEqual('New Comment');
  });
});