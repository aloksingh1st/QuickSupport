import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../config";

const PostDetail = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState();
  const id = useParams().id;
  console.log(id);
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    const fetchDetails = async () => {
      const res = await axios
        .get(API_BASE_URL+`/api/post/${id}`)
        .catch((err) => console.log(err));
      const data = await res.data;
      return data;
    };
    fetchDetails().then((data) => {
      setPost(data.post);
      setInputs({
        title: data.post.title,
        description: data.post.description,
      });
    });
  }, [id]);
  const sendRequest = async () => {
    const res = await axios
      .put(`http://localhost:5001/api/post/update/${id}`, {
        title: inputs.title,
        description: inputs.description,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  console.log(post);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/myposts/"));
  };

  return (
    <div>
      {inputs && (
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
            />
            <Button sx={{ borderRadius: 3, marginTop: 1 }} type="submit">
              Submit
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default PostDetail;
