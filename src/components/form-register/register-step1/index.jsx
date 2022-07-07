import React from 'react';
import PropTypes from 'prop-types';
import FormStep1Register from './register-step1-form';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { checkPhone } from 'features/Auth/userSlice';
// import { checkPhone } from '../../../features/Auth/userSlice';
Step1Register.propTypes = {
  handleNext: PropTypes.func,
};

function Step1Register(props) {
  const { handleNext } = props;
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
    <>
      <FormStep1Register onSubmit={handleLoginForm} handleNext={handleNext} />
    </>
  );
}

export default Step1Register;
