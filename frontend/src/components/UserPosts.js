import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import {API_BASE_URL} from "../config.js"
import Post from "./Post";

const UserPosts = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const id = localStorage.getItem("userId");
    const sendRequest = async () => {
      const res = await axios
        .get(API_BASE_URL+`/api/post/user/${id}`)
        .catch((err) => console.log(err));
      const data = await res.data;
      return data;
    };
    sendRequest().then((data) => setUser(data.user));
  }, []);
  console.log(user);
  return (
    <div>
      {" "}
      {user &&
        user.posts &&
        user.posts.map((post, index) => (
          <Post
          id={post._id}
            key={index}
            isUser={true}
            title={post.title}
            description={post.description}
            imageURL={post.image}
            userName={user.name}
          />
        ))}
    </div>
  );
};

export default UserPosts;
