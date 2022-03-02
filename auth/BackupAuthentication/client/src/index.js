import React from 'react';
import ReactDOM from 'react-dom';

import Header from 'components/layout/Header';
import App from 'components/App';
import SignUp from 'components/SignUp';
import SignIn from 'components/SignIn';
import Features from 'components/Features';
import SignoutComp from 'components/Signout';

import { BrowserRouter, Route } from 'react-router-dom';
import Root from 'redux/Root.store';
import ReduxAuth from 'components/ReduxAuth';


ReactDOM.render(
  <React.StrictMode>
    <Root>
      <BrowserRouter>
        <Header>
          <Route path="/" exact component={ReduxAuth} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signout" component={SignoutComp} />
          <Route path="/features" component={Features} />
          <Route path="/reduxauth" component={App} />
        </Header>
      </BrowserRouter>
    </Root>
  </React.StrictMode>,
  document.getElementById('root')
);

