import * as React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "../componants/TextField";
import { State } from "../redux/reducers";
import { logIn } from "../redux/actions/user.actions";

const LoginForm = () => (
  <Form>
    <Field
      margin="normal"
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="new-password"
      component={TextField}
    />
    <Field
      margin="normal"
      fullWidth
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="new-password"
      component={TextField}
    />
    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
      Sign In
    </Button>
  </Form>
);

export default function Login() {
  const dispatch = useDispatch();

  const performLogin = React.useCallback(({ email, password }: any) => {
    dispatch(logIn({ email: email.trim(), password: password.trim() }));
  }, []);

  const validate = React.useCallback((values: any) => {
    const errors: any = {};
    if (!values.email) errors.email = "Email Required";
    else {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(values.email))
        errors.email = "Invalid email address";
    }
    if (!values.password) errors.password = "Password Required";

    return errors;
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={performLogin}
          validate={validate}
        >
          <LoginForm />
        </Formik>
      </Box>
    </Container>
  );
}
