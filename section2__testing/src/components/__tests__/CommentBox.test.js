import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root'

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});


it('has a textarea and a button', () => {

  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

//------------------------------------------------------------------
describe('The textarea', () => {

  beforeEach(() => {

    //Find the textarea and add some values to it
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });

    //Force update so values is submittet.
    wrapped.update();
  });



  it('has a way for users to enter text into the texarea', () => {
    //See if textarea has a value of "new comment"
    expect(wrapped.find("textarea").prop('value')).toEqual('new comment');
  });


  it('empties the textarea after submitting the form', () => {


    //Check to see if content is right after forced update!
    expect(wrapped.find("textarea").prop('value')).toEqual('new comment');

    //Submit the form 
    wrapped.find('form').simulate('submit');

    //Update the form after it has been submitted. 
    wrapped.update();

    //Se if the form is as expected after the submision. 
    expect(wrapped.find("textarea").prop('value')).toEqual('');
  });

})