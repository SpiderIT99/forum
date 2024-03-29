import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import logo from "../../../assets/logo.svg";
import Checkbox from "../../../components/Checkbox/Checkbox";
import Input from "../../../components/Input/Input.jsx";
import Alerts from "../../../components/Alerts/Alerts.jsx";
import { useSignIn } from "../hooks/useSignIn.js";
import styles from "./login.module.css";
import {Link} from "react-router-dom";

const Login = () => {
  const username = localStorage.getItem("username") || "";

  const [formValues, setFormValues] = useState({
    password: "",
    rememberMe: username !== "",
    username: username,
  });
  const { signIn, isSigningIn } = useSignIn();

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
    signIn(formValues);
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
          <Typography variant="h4">Sign in</Typography>
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
              id="password"
              label="Password"
              type="password"
              value={formValues.password}
              onChange={handleValueChange}
              autocomplete="current-password"
              required
            />
            <Checkbox
              id="rememberMe"
              label="Remember me"
              value={formValues.rememberMe}
              onChange={handleValueChange}
            />
            <Button
              disabled={isSigningIn}
              type="submit"
              variant="outlined"
              color="primary"
              fullWidth
              disableElevation
            >
              SIGN IN
            </Button>
            <Grid container item gap={1} justifyContent="center">
              <Typography variant="subtitle1">Don't have an account yet?</Typography>
              <Typography variant="subtitle1">
                <Link to="/register">Sign up</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Alerts />
    </Grid>
  );
};

export default Login;
