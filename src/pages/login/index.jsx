import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../../components/login-form';

Login.propTypes = {};

const handleLoginForm = (values) => {
  console.log('Form submit:', values);
};

function Login(props) {
  return (
    <>
      <h1>Login Form</h1>
      <LoginForm onSubmit={handleLoginForm} />
    </>
  );
}

export default Login;
