import React, { useState } from 'react';

import './PasswordCardField.css';

const PasswordCardFieldTitle = ({ input, boolean, readOnlyEdit }) => {
  const renderBorder = () => (readOnlyEdit ? '' : 'white solid 1px');
  const renderCondicionalInput = () => {
    if (boolean === 'true') {
      return (
        <>
          <div className="mx-0 w-100">
            <input
              style={{
                borderRadius: '7px',
                border: `${renderBorder()}`,
                height: '28px',
                backgroundColor: 'transparent',
                color: 'white',
              }}
              readOnly={readOnlyEdit}
              {...input}
              type="text"
              className="form-control-plaintext text-center text-bold mx-auto text-title"
            />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="d-flex">
            <input
              style={{
                borderRadius: '7px',
                width: '100%',
                textAlign: 'center',
                border: `${renderBorder()}`,
              }}
              readOnly={readOnlyEdit}
              {...input}
              type="text"
              className="form-control-plaintext input-fields text-left"
            />
          </div>
        </>
      );
    }
  };
  return (
    <>
      <div className="form-group row mx-auto">{renderCondicionalInput()}</div>
    </>
  );
};

export default PasswordCardFieldTitle;
