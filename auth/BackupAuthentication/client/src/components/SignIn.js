import React, { Fragment } from 'react';
import Form from 'components/forms/Form';
import classes from 'components/signin.module.css'

const SignIn = () => {
  return (
    <Fragment>
      <h3 className={classes.header}>
        Sign in
      </h3>
      <Form formType="signin" />
    </Fragment>
  )
}

export default SignIn
