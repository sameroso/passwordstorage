import React from 'react';
import LoginBtns from './LoginBtns';
import './LoginPage.css';
import passwordLogo from '../passwordlogo.png';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="size d-flex bg-login">
      <div className="container d-flex">
        <div className="my-auto mx-auto">
          <div className="row">
            <img
              className="mx-auto img-fluid logo-size"
              src={passwordLogo}
              alt="logo"
            />
          </div>
          <div className="row tittle">
            <h2 className="mx-auto mb-4 font">
              <strong>Password</strong> Storage
            </h2>
          </div>
          <div className="row">
            <p className="mx-auto font">Store your passwords safely</p>
          </div>
          <div className="row mt-5">
            <Link to="/aboutus" className="mx-auto">
              <p className="mx-auto font text-center mx-auto font-about-us">
                About Us
              </p>
            </Link>
          </div>

          <div className="mt-5">
            <LoginBtns />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
