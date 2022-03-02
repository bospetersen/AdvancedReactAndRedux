import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from 'redux/actions/index';
import classes from 'components/signout.module.css'

const SignoutComp = (props) => {
  useEffect(() => {
    props.signout();
  }, [props]);

  return (
    <Fragment>
      <h3 className={classes.header}>
        You are now signed out!<br />
        We are sorry to see you go!
      </h3>
    </Fragment>
  )
}

export default connect(null, actions)(SignoutComp)
