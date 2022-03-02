import React from 'react';
import Form from 'components/forms/Form';
import classes from 'components/signup.module.css'

const SignUp = () => {
  return (
    <div>
      <h3 className={classes.header}>
        Sign up
      </h3>
      <Form formType="signup" />
    </div>
  )
}

export default SignUp
