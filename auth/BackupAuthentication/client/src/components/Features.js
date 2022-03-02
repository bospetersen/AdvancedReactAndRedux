import React, { Fragment } from 'react';
import RequireAuth from 'components/hoc/RequireAuth';
import classes from 'components/features.module.css';

const Features = () => {
  return (
    <Fragment>
      <h3 className={classes.header}>
        Features
      </h3>
    </Fragment>
  )
}

export default RequireAuth(Features);
