import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import cookie from "cookie";
import '../App.css';

const Login = (props) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const login = (e) => {
    e.preventDefault();
    props.setUser({...state})
    
    document.cookie = cookie.serialize("loggedIn", true, { maxAge: 300 })

    navigate("/");
  };
    // check db & verify username & pwd bash
    // if true, generate the signed token
    // cookie is set after ->e.preventDefault()
    // Next line sets loggedIn = true and max-age = 60*1000 (one minute)







  
  return (
    <div className="App">
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={login}>
          <TextField
             id="outlined-basic" label="Outlined" variant="outlined" 
            onChange={handleTextChange}
            value={state.username}
            name="username"
            // eslint-disable-next-line react/jsx-no-duplicate-props
            label="Username"
            type="text"
          />
          <TextField          
            id="outlined-basic" label="Outlined" variant="outlined" 
            onChange={handleTextChange}
            value={state.password}
            name="password"
            // eslint-disable-next-line react/jsx-no-duplicate-props
            label="Password"
            type="password"
          />
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
