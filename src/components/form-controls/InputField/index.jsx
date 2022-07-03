import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, placeholder, disabled } = props;
  //   const { errors, formState } = form;
  //   const hasError = formState.touched[name] && errors[name];
  //   console.log(errors[name], formState[name]);
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <TextField {...field} fullWidth placeholder={placeholder} disabled={disabled} />
      )}
      //   error={!!hasError}
      //   helperText="Loi roi "
    ></Controller>
  );
}

export default InputField;
