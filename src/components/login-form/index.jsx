// import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
import InputField from '../form-controls/InputField';

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  //   const SignupSchema = yup.object().shape({
  //     username: yup.string().required('Vui long nhap'),
  //   });

  const form = useForm({
    defaultValues: {
      username: '',
    },
    // resolver: yupResolver(SignupSchema),
  });

  const handleSubmit = (values) => {
    console.log('Login Form:', values);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="username" placeholder="userNameLogin" form={form} />
    </form>
  );
}

export default LoginForm;
