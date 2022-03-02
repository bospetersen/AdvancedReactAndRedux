import React, { Fragment, useRef } from 'react';
import classes from 'components/forms/form.module.css';

import { connect } from 'react-redux';
import * as actions from 'redux/actions/index';
import { withRouter } from 'react-router';

const Form = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  //------------------------------------------------------

  const submitFormHandler = (event) => {
    event.preventDefault()

    //------------------------------------------------------

    const inputEmail = emailInputRef.current.value;
    const inputPassword = passwordInputRef.current.value;

    const inputData = {
      email: inputEmail,
      password: inputPassword
    }

    //------------------------------------------------------

    if (!inputEmail.includes('@') ||
      !inputEmail ||
      !inputPassword ||
      inputPassword.length < 7) {
      const errors = {
        errors: {
          message: 'Please provide a valid email and a password of 7 characters or more'
        }
      }
      return errors
    }

    //------------------------------------------------------

    if (props.formType === 'signup') {
      props.signup(inputData, () => {
        props.history.push('/features');
      })
    }

    if (props.formType === 'signin') {
      props.signin(inputData, () => {
        props.history.push('/');
      })

    }
  }

  //------------------------------------------------------

  return (
    <Fragment>
      <form className={classes.form} onSubmit={submitFormHandler}>
        <label htmlFor="email">E-mail</label>
        <br />
        <input type="email" ref={emailInputRef} name="gender" id="email" /> &nbsp; &nbsp;
        <span className={classes.error}> {props.errorMessage} </span> <br /><br />
        <label htmlFor="password"> Password </label>
        <br />
        <input type="password" name="gender" ref={passwordInputRef} id="password" />
        <br /> <br />
        <input type="submit" value="Submit" />
      </form>
    </Fragment>
  )
}

//------------------------------------------------------

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default withRouter(connect(mapStateToProps, actions)(Form))