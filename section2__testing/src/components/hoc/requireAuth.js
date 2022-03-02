import React, { Component } from 'react'
import { connect } from 'react-redux';

// eslint-disable-next-line import/no-anonymous-default-export
export default (ChildComponent) => {

  class ComposedComponent extends Component {

    componentDidMount() {
      this.shuldNavigateAway()
    }

    componentDidUpdate() {
      this.shuldNavigateAway()
    }

    shuldNavigateAway() {
      if (!this.props.auth) {
        // console.log('Not Logged in: Please leave!')
        this.props.history.push('/')
      }
    }


    render() {
      return <ChildComponent {...this.props} />
    }
  }

  const mapStatetoProps = (state) => {
    return { auth: state.auth }
  }


  return connect(mapStatetoProps)(ComposedComponent)
};


