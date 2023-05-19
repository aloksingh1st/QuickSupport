import React from "react";
import { Box, Card, IconButton } from "@mui/material";
import { CardHeader } from "@mui/material";
import { Avatar } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {API_BASE_URL} from "../config.js"

const Post = ({ title, description, imageURL, userName, isUser, id, time }) => {
  const navigate = useNavigate();
  const handleEdit = (e) => {
    navigate(`/myPosts/${id}`);
  };
  const deleteRequest = async () => {
    const res = await axios
      .delete(API_BASE_URL+`/api/post/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = () => {
    deleteRequest()
      .then(() => navigate("/"))
      .then(() => navigate("/posts"));
  };
  return (
    <div>
      <Card
        sx={{
          width: "30%",
          // minWidth:"60%"
          margin: "auto",
          mt: 2,
          padding: 2,
          boxShadow: "5px 5px 10px #ccc",
          ":hover": {
            boxShadow: "15px 15px  10px #ccc",
          },
        }}

        className="sm:w-100%"
      >
        {isUser && (
          <Box display={"flex"}>
            <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
              <ModeEditOutlineIcon  color="primary"/>
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteForeverIcon color="error"/>
            </IconButton>
          </Box>
        )}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              {userName}
            </Avatar>
          }
          title={title}
        />
        <CardMedia
          component="img"
          height="194"
          width={"auto"}
          image={imageURL}
          alt="Paella dish"
        />
        <hr/>
        <br/>
        <CardContent
        className="d-flex">
            <div>
          <Typography variant="body2" color="text.secondary">

            <b>{userName}</b>
            {" : "}
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {time}
          </Typography>
            </div>
          <Typography variant="body3" color="text.secondary" style={{float:"right", margin:"auto"}}>
            seen
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Post;
