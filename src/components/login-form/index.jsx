import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const schema = yup.object().shape({
    username: yup.string().required('Please enter your email.'),
  });
  const form = useForm({
    defaultValues: {
      username: '',
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
        <InputField name="username" placeholder="Email" form={form}></InputField>
      </form>
    </div>
  );
}

export default LoginForm;
