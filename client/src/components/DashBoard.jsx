import React from 'react';
import { Link } from 'react-router-dom';
import PasswordList from './PasswordList';
import EmptyDashBoard from './EmptyDasboard';
import { connect } from 'react-redux';
import './DashBoard.css';

function DashBoard({ passwordList }) {
  const renderDashBoard = () => {
    if (passwordList.length === 0) {
      return (
        <>
          <EmptyDashBoard />
        </>
      );
    } else {
      return (
        <div className="bg-dashboard">
          <div>
            <PasswordList />
          </div>
        </div>
      );
    }
  };
  return <>{renderDashBoard()}</>;
}

const mapStateToProps = (state) => {
  return { passwordList: state.auth.passwordList };
};

export default connect(mapStateToProps)(DashBoard);
