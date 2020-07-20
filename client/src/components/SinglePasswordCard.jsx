import React, { useState } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import { deletePassword } from '../actions';
import { editPassword } from '../actions';

import PasswordCardField from './PasswordCardField';
import PasswordCardFieldTitle from './PasswordCardFieldTitle';
import './SinglePasswordCard.css';
import { BsTrash } from 'react-icons/bs';
import { MdModeEdit } from 'react-icons/md';
import { MdCancel } from 'react-icons/md';
import { MdSave } from 'react-icons/md';
import Modal from './Modal';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SinglePasswordCard({
  handleSubmit,
  editPassword,
  _id,
  reset,
  deletePassword,
  formData,
}) {
  const [readOnly, setReadOnly] = useState(true);

  const [deleting, setDeleting] = useState(true);
  const isDeleting = deleting ? (
    <BsTrash
      className="card-icon"
      size="20px"
      data-toggle="modal"
      data-target={`#${_id}`}
    />
  ) : (
    <Loader type="ThreeDots" color="white" height={20} width={20} />
  );
  const [saving, setSaving] = useState(true);
  const isSaving = saving ? (
    <MdSave
      className="card-icon"
      size="20px"
      data-toggle="modal"
      data-target={`#${_id}`}
    />
  ) : (
    <Loader type="ThreeDots" color="white" height={20} width={20} />
  );

  const onEdit = async () => {
    try {
      setSaving(false);
      await editPassword({ ...formData.values, _id });
      setReadOnly(true);
      setSaving(true);
      await toast.info('Password Updated with success', {
        className: 'bg-delete-popup-sucess',
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch {
      toast.error('An error Ocurred, Please try later', {
        className: 'bg-delete-popup-error',
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setSaving(true);
    }
  };

  const onDeletePassword = async () => {
    try {
      setDeleting(false);
      await deletePassword({ _id });
      await toast.info('Password Deleted with success', {
        className: 'bg-delete-popup-sucess',
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch {
      toast.error('An error Ocurred, Please try later', {
        className: 'bg-delete-popup-error',
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setDeleting(true);
    }
  };
  const renderButton = () => {
    if (readOnly) {
      return (
        <div>
          <div className="row justify-content-end mb-2">
            <button
              className="card-btn mr-3 my-auto"
              type="button"
              onClick={() => setReadOnly(false)}
            >
              <MdModeEdit className="card-icon" size="20px" />
            </button>
            <button className="card-btn mr-3 my-auto" type="button">
              {isDeleting}
            </button>
            <Modal
              id={_id}
              actionName="delete"
              onAction={() => handleSubmit(onDeletePassword())}
              btnType="button"
              type="password"
            />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="row justify-content-end">
            <button
              type="button"
              className="card-btn mr-3 my-auto"
              onClick={() => {
                setReadOnly(true);
                reset();
              }}
            >
              <MdCancel className="card-icon" size="20px" />
            </button>
            <button type="submit" className="card-btn mr-3 my-auto">
              {isSaving}
            </button>
            <Modal
              id={_id}
              actionName="update"
              onAction={() => handleSubmit(onEdit())}
              type="password"
            />
          </div>
        </div>
      );
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="my-4 form-style"
    >
      <div className="d-flex bg-card-title pt-3 border-top-title mb-2">
        <div className="col-8 col-sm-8 col-md-8 col-lg-7">
          <Field
            readOnlyEdit={readOnly}
            boolean="true"
            component={PasswordCardFieldTitle}
            name="title"
          />
        </div>
        <div className="col-4 col-sm-4 col-md-4 col-lg-5">{renderButton()}</div>
      </div>
      <Field
        readOnlyEdit={readOnly}
        boolean="true"
        labelValue="Domain"
        component={PasswordCardField}
        name="domain"
      />
      <Field
        readOnlyEdit={readOnly}
        boolean="true"
        labelValue="User"
        component={PasswordCardField}
        name="userName"
      />
      <Field
        readOnlyEdit={readOnly}
        boolean="false"
        labelValue="Password"
        component={PasswordCardField}
        name="password"
      />
    </form>
  );
}

const SinglePasswordForm = reduxForm({ enableReinitialize: true })(
  SinglePasswordCard
);

const mapStateToProps = (state, ownProps) => {
  return { formData: state.form[ownProps._id] };
};

export default connect(mapStateToProps, {
  deletePassword,
  editPassword,
})(SinglePasswordForm);
