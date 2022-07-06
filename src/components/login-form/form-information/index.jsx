import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../form-controls/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import PasswordField from '../../form-controls/PasswordField';
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
InformationFormLogin.propTypes = {
  onSubmit: PropTypes.func,
};

function InformationFormLogin(props) {
  const schema = yup.object().shape({
    username: yup.string().required('Please enter .'),
  });
  const form = useForm({
    defaultValues: {
      username: '',
      password: '',
    },

    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      console.log('Login Form:', values);
      await onSubmit(values);
    }
  };
  return (
    <div>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField
          name="username"
          placeholder="Email hoặc số điện thoại *"
          form={form}
        ></InputField>
        <PasswordField name="password" label="Password *" form={form}></PasswordField>

        <Button
          // disabled={isSubmitting}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
          Đăng nhập
        </Button>
      </form>
    </div>
  );
}

export default InformationFormLogin;
