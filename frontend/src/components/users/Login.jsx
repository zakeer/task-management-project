import React from "react";
import { connect } from "react-redux";
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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      email: "",
      password: "",
      emailError: null,
      passwordError: null,
    };
  }

  handleClickShowPassword = () => {
    var currentState = this.state.showPassword;
    this.setState({ showPassword: !currentState });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  handleOnClick = () => {
    var { email, password } = this.state;
    if (email && password) {
      this.setState({ emailError: false });
      this.setState({ passwordError: false });
    } else {
      this.setState({ emailError: true });
      this.setState({ passwordError: true });
    }
    console.log(email, password);
  };

  handleEmailChange = (event) => {
    var {
      target: { value },
    } = event;
    this.setState({ email: value });
  };

  handlePasswordChange = (event) => {
    var {
      target: { value },
    } = event;
    this.setState({ password: value });
  };

  render() {
    var { showPassword, emailError, passwordError, email, password } =
      this.state;
    return (
      <div className="flex flex-col justify-around gap-8 shadow-2xl w-3/5 p-8 mx-auto rounded-2xl  mt-12">
        <h1 className="text-2xl">Login</h1>
        <TextField
          id="standard-basic"
          value={email}
          onChange={this.handleEmailChange}
          label="Email"
          variant="standard"
          type="email"
          required
          error={emailError}
          helperText={emailError && "!Email required"}
        />
        <FormControl variant="standard" error={passwordError} required>
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={this.handlePasswordChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  onMouseDown={this.handleMouseDownPassword}
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
          onClick={this.handleOnClick}
        >
          Login <KeyboardArrowRightIcon />
        </Button>
        <p className="flex justify-center">Or</p>
        <div className="flex justify-center gap-2 items-center">
          <p> Need an account ?</p>
          <Button
            href="/register"
            sx={{ fontSize: "13px", textDecoration: "underline", padding:"0px", margin:"0px", paddingTop:"4px"}}
          >
            Register
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    storeState,
    error: storeState.error,
  };
};

export default connect(mapStateToProps)(Login); // <Login {...prevProps} storeState={{}} error={storeState.error} />
