import React from 'react';
import { connect } from 'react-redux';

import LoginPage from './LoginPage';
import DashBoard from './DashBoard';
import Navbar from './Navbar';
import LoadingPage from './LoadingPage';

function LandingPage({ auth, match }) {
  if (auth === null) {
    return (
      <div>
        <LoadingPage />
      </div>
    );
  } else if (auth) {
    return (
      <div>
        <Navbar path={match.path} />
        <DashBoard />
      </div>
    );
  } else if (auth === false) {
    return <LoginPage />;
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(LandingPage);
