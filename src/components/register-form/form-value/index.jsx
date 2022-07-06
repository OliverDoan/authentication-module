import React from 'react';
import PropTypes from 'prop-types';
import InformationFormRegister from '../form-infirmation';
import { useDispatch } from 'react-redux';
// import { register } from '../../features/Auth/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { checkPhone } from '../../../features/Auth/userSlice';
Formvalue.propTypes = {};

function Formvalue(props) {
  const dispatch = useDispatch();
  const handleLoginForm = async (values) => {
    try {
      console.log('Form submit:', values);
      const action = checkPhone(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
      console.log('user', unwrapResult(resultAction));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <InformationFormRegister onSubmit={handleLoginForm} />
    </div>
  );
}

export default Formvalue;
