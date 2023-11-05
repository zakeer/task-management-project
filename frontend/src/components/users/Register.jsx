import React, {  useState } from "react";
import { connect, useStore } from "react-redux";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

function Register(props) {
  const store = useStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const error = store.getState().error;
  console.log(props, error);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleOnClick = () => {
    if (email && password) {
      setEmailError(false);
      setPasswordError(false);
    } else {
      setEmailError(true);
      setPasswordError(true);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    var {
      target: { value },
    } = e;
    setPassword(value);
  };

  return (
    <div className="flex flex-col justify-around gap-8 shadow-2xl w-3/5 p-8 mx-auto rounded-2xl  mt-12">
      <h1 className="text-2xl">Register</h1>
      <TextField
        id="standard-basic"
        onChange={handleEmailChange}
        label="Email"
        variant="standard"
        type="email"
        required
        error={emailError}
        helperText={emailError && "!Email required"}
      />
      <FormControl variant="standard" error={passwordError} required>
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          type={showPassword ? "text" : "password"}
          onChange={handlePasswordChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        {passwordError && <FormHelperText>!Password Required</FormHelperText>}
      </FormControl>
      <p className="flex justify-end text-blue-500 cursor-pointer">
        Forgot Password ?
      </p>
      <Button
        className="flex gap-4"
        variant="contained"
        onClick={handleOnClick}
      >
        Register <KeyboardArrowRightIcon />
      </Button>
      <p className="flex justify-center">Or</p>
      <div className="flex justify-center items-center">
        <p> Already have an account ?</p>
        <Button
          href="/login"
          sx={{ fontSize: "13px", textDecoration: "underline", padding:"0px", margin:"0px", paddingTop:"4px" }}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = (data) => {
  return {
    data,
  };
};

export default connect(mapStateToProps)(Register);
