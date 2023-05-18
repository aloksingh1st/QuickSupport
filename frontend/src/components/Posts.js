import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Post from "./Post";
import { Dropdown } from "flowbite-react";
import {API_BASE_URL} from "../config.js"

const Posts = () => {
  const [posts, setPosts] = useState();
  const [filter, setFilter] = useState("oldest");

  const sendRequest = async () => {
    const res = await axios
      .get(API_BASE_URL+"/api/post",{
       params:{
        param1:filter
       } 
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setPosts(data.posts));
  }, [filter]);
  
  return (
    <div>
      <Dropdown
        label="Filter"
        dismissOnClick={false}
        className="my-6"
        bgColor="white"
        style={{ marginTop: "2rem !important" }}
      >
        <Dropdown.Item onClick={()=>setFilter("oldest")}>Oldest First</Dropdown.Item>
        <Dropdown.Item onClick={()=>setFilter("newest")}>Newest First</Dropdown.Item>
      </Dropdown>

      {console.log(filter)}

      {posts &&
        posts.map((post, index) => (
          <Post
            id={post._id}
            isUser={localStorage.getItem("userId") === post.user._id}
            title={post.title}
            description={post.description}
            imageURL={post.image}
            userName={post.user.name}
            time={post.time}
          />
        ))}
    </div>
  );
};

export default Posts;
