import TextField from "@mui/material/TextField";

const FormikTextField = ({ field, form, ...props }: any) => {
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <TextField
      {...field}
      {...props}
      error={showError}
      helperText={showError ? errors[name] : null}
    />
  );
};

export default FormikTextField;
