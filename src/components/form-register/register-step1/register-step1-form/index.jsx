import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../form-controls/InputField';
FormStep1Register.propTypes = {
  onSubmit: PropTypes.func,
  handleNext: PropTypes.func,
};

function FormStep1Register(props) {
  const { onSubmit, handleNext } = props;
  const schema = yup.object().shape({
    phone: yup.string().required('Please enter .'),
    username: yup
      .string()
      .required('Please enter .')
      .test('Should has at least two words.', 'Họ tên không đúng', (value) => {
        return value.split(' ').length >= 2;
      }),
    email: yup
      .string()
      .required('Please enter your email.')
      .email('Please enter an valid email address.'),
  });

  const form = useForm({
    defaultValues: {
      phone: '',
      username: '',
      email: '',
    },

    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
      handleNext();
    }
  };

  return (
    <>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="phone" placeholder="Số điện thoại *" form={form}></InputField>
        <InputField
          name="username"
          placeholder="Họ & tên người đại diện *"
          form={form}
        ></InputField>
        <InputField name="email" placeholder="Email *" form={form}></InputField>
        <Button type="submit" variant="contained" color="primary" fullWidth size="large">
          Create an account
        </Button>
      </form>
    </>
  );
}

export default FormStep1Register;
