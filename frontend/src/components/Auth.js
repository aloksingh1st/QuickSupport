import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { authActions } from "../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextInput } from "flowbite-react";

import {API_BASE_URL} from "../config.js"
import "./../App.css";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });


  const [isSignup, setIsSignup] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async (type = "login") => {
    const res = await axios
      .post(API_BASE_URL+`/api/user/${type}`, {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => alert(err.message));

    const data = await res.data;
    console.log(res);
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    if (isSignup) {
      sendRequest("signup")
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => dispatch(authActions.login()))
        .then(() => navigate("/posts"))
        .then((data) => console.log(data));
    } else {

      console.log("data")
      sendRequest()
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => dispatch(authActions.login()))
        .then(() => navigate("/posts"))
        .then((data) => console.log(data));
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          maxHeight={800}
          maxWidth={600}
          display={"flex"}
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}
        >
          <Typography variant="h4" padding={3} textAlign="center">
            {isSignup ? "Signup" : "Login"}
          </Typography>
          {isSignup && (
            <TextInput
              name="name"
              className="my-2"
              onChange={handleChange}
              value={inputs.name}
              placeholder="Name"
            />
          )}
          <TextInput
            name="email"
            className="my-2"
            onChange={handleChange}
            value={inputs.email}
            type={"email"}
            placeholder="Email"
            margin="normal"
          />
          <TextInput
            name="password"
            className="my-2"
            onChange={handleChange}
            value={inputs.password}
            type={"password"}
            placeholder="Password"
            margin="normal"
          />
          <Button
            type="submit"
            sx={{
              borderRadius: 3,
              border: 1,
              width: 80,
              margin: 1,
              marginTop: 3,
              color: "green",
              backgroundColor: "white",
            }}
            color="warning"
          >
            Submit
          </Button>
          <Button
            onClick={() => setIsSignup(!isSignup)}
            sx={{ borderRadius: 3, marginTop: 1 }}
          >
            Change To {isSignup ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
