import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from 'components/layout/header.module.css'

const Header = (props) => {

  const renderLinks = () => {
    if (!props.authenticated) {
      return (
        <Fragment>
          <Link to="/signin"><li>Sign In</li></Link>
          <Link to="/signup"><li>Sign up</li></Link>
        </Fragment>
      )
    }

    return (
      <Fragment>
        <Link to="/signout"><li>Sign out</li></Link>
        <Link to="/features"><li>Features</li></Link>
        <Link to="/reduxauth"><li>Redux Auth</li></Link>
      </Fragment>
    )
  }



  return (
    <Fragment>
      <ul className={classes.menu}>
        <Link to="/"><li>Home</li></Link>
        {renderLinks()}
      </ul>
      {props.children}
    </Fragment>
  )
}
function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}
export default connect(mapStateToProps)(Header)
