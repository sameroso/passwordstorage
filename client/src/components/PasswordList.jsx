import React, { useState } from 'react';
import { connect } from 'react-redux';

import SinglePasswordCard from './SinglePasswordCard';
import './PasswordList.css';
import { BsSearch } from 'react-icons/bs';

function PasswordList({ passwordList }) {
  const renderList = () => {
    if (searchInput.length !== 0) {
      return filteredList.map((el) => {
        return (
          <div className="col-md-6 col-lg-4" key={el._id}>
            <SinglePasswordCard
              key={el._id}
              _id={el._id}
              form={`${el._id}`}
              initialValues={{
                title: el.title,
                domain: el.domain,
                userName: el.userName,
                password: el.password,
              }}
            />
          </div>
        );
      });
    }
    return passwordList.map((el) => {
      console.log(el._id);
      return (
        <div className="col-md-6 col-lg-4" key={el._id}>
          <SinglePasswordCard
            key={el._id}
            _id={el._id}
            form={`${el._id}`}
            initialValues={{
              title: el.title,
              domain: el.domain,
              userName: el.userName,
              password: el.password,
            }}
          />
        </div>
      );
    });
  };
  const [searchInput, setSearchInput] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const findElements = (e) => {
    const filteredElements = passwordList.filter((el) => {
      if (
        el.domain.toLowerCase().includes(e.target.value.toLowerCase()) ||
        el.userName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        el.password.toLowerCase().includes(e.target.value.toLowerCase()) ||
        el.title.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return el;
      }
    });
    setFilteredList(filteredElements);
  };
  return (
    <div className="container">
      <div className="row search-bar-container mt-3">
        <input
          className="search-bar"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            findElements(e);
          }}
          placeholder="Search for passwords, domains, titles or user names"
        />
        <BsSearch className="my-auto text-white" />
      </div>
      <div className="row">{renderList()}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { passwordList: state.auth.passwordList };
};

export default connect(mapStateToProps)(PasswordList);
