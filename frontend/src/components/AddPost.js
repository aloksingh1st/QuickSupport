import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Tost} from "./Tost"

import {API_BASE_URL} from "../config"

const AddPost = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    imageURL: "",
  });

const [toastf, setToastf] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios
      .post(API_BASE_URL+"/api/post/add", {
        title: inputs.title,
        description: inputs.description,
        image: inputs.imageURL,
        user: localStorage.getItem("userId"),
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setToastf(true);
    console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/posts"));
      {
        toastf && <Tost msg="Posst Added Successfully"/>
      }
  };



  return (
    <div>
        {
          toastf && <Tost msg="Posst Added Successfully"/>
        }
      <form onSubmit={handleSubmit}>
        <Box
          border={3}
          borderRadius={2}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin={"auto"}
          marginTop={2}
          display="flex"
          flexDirection={"column"}
          width="85%"
          justifyContent={"center"}
        >
          <Typography
            fontWeight={"bold"}
            padding={3}
            color="grey"
            variant="h3"
            textAlign={"center"}
          >
            Post Your Post
          </Typography>
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Title
          </InputLabel>
          <TextField
            name="title"
            onChange={handleChange}
            value={inputs.title}
            margin="auto"
            variant="outlined"
            sx={{border :2,borderRadius:2}}
          />
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Description
          </InputLabel>
          <TextField
            name="description"
            onChange={handleChange}
            value={inputs.description}
            margin="auto"
            variant="outlined"
            sx={{border :2,borderRadius:2}}
          />
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            ImageURL
          </InputLabel>
          <TextField
            name="imageURL"
            onChange={handleChange}
            value={inputs.imageURL}
            margin="auto"
            variant="outlined"
            sx={{border :2,borderRadius:2}}
          />
          <Button sx={{ borderRadius: 3, marginTop: 1 }} type="submit">
            Submit
          </Button>
        </Box>
      </form>

    </div>
  );
};

export default AddPost;
