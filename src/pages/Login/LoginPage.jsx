import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import LoginService from "../../services/AuthService";

const Login = () => {

  const [authData, setAuthData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const classes = {
    marginStyle: {
      margin: "10px"
    },
    marginBottom: {
      marginBottom: '6px'
    }
  };

  const handleChange = (name, value) => {
    setAuthData({...authData, [name]: value });
  };

  const handleSubmit = async () => {
    if (authData.email !== "" && authData.password !== "") {
      await LoginService(authData);
      navigate("/");
    }
  };

  return (
    <>
      <form style={classes.marginStyle}>
        <div style={classes.marginBottom}>
          <TextField
            required
            id="outlined-basic"
            type="email"
            label="Username"
            variant="outlined"
            name="email"
            onChange={(e)=> handleChange(e.target.name,e.target.value)}
          />
        </div>
        <div style={classes.marginBottom}>
          <TextField
            required
            id="outlined-basic"
            type="password"
            label="Password"
            variant="outlined"
            name="password"
            onChange={(e)=> handleChange(e.target.name,e.target.value)}
          />
        </div>
        <Button variant="contained" onClick={handleSubmit}>Login</Button>
      </form>
    </>
  );
};

export default Login;
