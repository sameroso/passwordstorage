import React from 'react';
import './Navbar.css';
import passwordLogo from '../passwordlogo.png';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import { deleteAccount } from '../actions';
import { BsPlus } from 'react-icons/bs';

function Navbar({ auth, deleteAccount }) {
  const renderProfile = () => {
    if (auth === false) {
      return null;
    } else if (auth === null) {
      return null;
    } else {
      return (
        <div className="d-flex">
          <div className="add-btn-config">
            <div className="row pt-2">
              <Link to="/new" className="mx-auto">
                <BsPlus
                  className="add-button-style"
                  size="40px"
                  color="white"
                />
              </Link>
            </div>
          </div>
          <div className="dropdown my-auto">
            <button
              className="dropdown-config dropdown-toggle"
              type="button"
              id="dropdownMenu"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="d-flex">
                <img
                  className="profile-pic my-auto mr-1"
                  src={auth.profilePic}
                  alt=""
                />
                <p className="text-white mb-0 my-auto">
                  {auth.profileName} &#9660;
                </p>
              </div>
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu">
              <Link to="/aboutus">
                <button className="dropdown-item" type="button">
                  About Us
                </button>
              </Link>
              <button
                className="dropdown-item"
                type="button"
                data-toggle="modal"
                data-target="#deleteAccountModal"
              >
                Delete Account
              </button>
              <button className="dropdown-item" type="button">
                <a href="api/logout" className="logout-link">
                  Logout
                </a>
              </button>
            </div>
          </div>
          <Modal
            id="deleteAccountModal"
            actionName="delete account"
            onAction={deleteAccount}
            btnType="button"
            type="account"
          />
        </div>
      );
    }
  };
  return (
    <div className="background py-2">
      <div className="container">
        <div className="row justify-content-between">
          <Link to="/" className="link-logo">
            <div className="d-flex ml-2">
              <img
                className="config-image my-auto"
                src={passwordLogo}
                alt="Logo"
              ></img>
              <h5 className="ml-2 font-header my-auto">
                <strong>Password</strong>
                <br />
                Storage
              </h5>
            </div>
          </Link>
          {renderProfile()}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { deleteAccount })(Navbar);
