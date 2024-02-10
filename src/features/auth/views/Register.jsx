import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import logo from "../../../assets/logo.svg";
import Input from "../../../components/Input/Input.jsx";
import Alerts from "../../../components/Alerts/Alerts.jsx";
import useRegister from "../hooks/useRegister";
import styles from "./login.module.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [formValues, setFormValues] = useState({
    confirmPassword: "",
    email: "",
    password: "",
    username: "",
  });
  const [fieldsWithErrors, setFieldsWithErrors] = useState([]);
  const { postUser, isPostingUser } = useRegister();

  const validatePassword = () => {
    if (formValues.password !== formValues.confirmPassword) {
      setFieldsWithErrors((prevState) => [...prevState, "confirmPassword"]);
      return "Hasło nie zgadza się!";
    } else {
      setFieldsWithErrors((prevState) => [
        ...prevState.filter((field) => field !== "confirmPassword"),
      ]);
    }
    return undefined;
  };

  const handleValueChange = (newValue, id, maxLength) => {
    if (
      !maxLength ||
      (maxLength &&
        typeof newValue === "string" &&
        newValue.length <= maxLength)
    ) {
      setFormValues((prevState) => ({
        ...prevState,
        [id]: newValue,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    postUser(formValues);
  };

  return (
    <Grid container flexGrow={1}>
      <Grid
        container
        item
        lg={6}
        paddingX={16}
        paddingY={8}
        bgcolor="secondary.light"
        alignItems="center"
        justifyContent="center"
      >
        <img className={styles.logo} src={logo} alt="logo" />
      </Grid>
      <Grid
        container
        item
        xs={12}
        lg={6}
        padding={2}
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          container
          item
          gap={2}
          padding={3}
          maxWidth="500px"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h4">Sign up</Typography>
          <Grid component="form" onSubmit={handleSubmit} container gap={3}>
            <Input
              id="username"
              label="Username"
              value={formValues.username}
              onChange={handleValueChange}
              autocomplete="username"
              required
            />
            <Input
              id="email"
              label="E-mail"
              value={formValues.email}
              onChange={handleValueChange}
              autocomplete="mail"
              required
            />
            <Input
              id="password"
              label="Password"
              type="password"
              value={formValues.password}
              onChange={handleValueChange}
              autocomplete="current-password"
              required
            />
            <Input
              customValidation={validatePassword}
              disabled={!Boolean(formValues.password)}
              id="confirmPassword"
              label="Confirm password"
              type="password"
              value={formValues.confirmPassword}
              onChange={handleValueChange}
              required
            />
            <Button
              disabled={fieldsWithErrors.length > 0 || isPostingUser}
              type="submit"
              variant="outlined"
              color="primary"
              fullWidth
              disableElevation
            >
              SIGN UP
            </Button>
          </Grid>
          <Grid container item gap={1} justifyContent="center">
            <Typography variant="subtitle1">Already have an account?</Typography>
            <Typography variant="subtitle1">
              <Link to="/login">Sign in</Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Alerts />
    </Grid>
  );
};

export default Register;
