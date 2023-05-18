import mongoose from "mongoose";
import Post from "../model/Post.js";
import User from "../model/User.js";

export const getAllPost = async (req, res, next) => {
  let posts;

  const param1 = req.query.param1;



  if(param1 == "newest"){
    try {
      posts = await Post.find().populate("user").sort({time:-1});
    } catch (error) {
      return console.log(error);
    }
    if (!posts) {
      return res.status(404).json({ message: "No post found" });
    }
    return res.status(200).json({ posts });
    
  }
  else{
    try {
      posts = await Post.find().populate("user").sort({time:1});
    } catch (error) {
      return console.log(error);
    }
    if (!posts) {
      return res.status(404).json({ message: "No post found" });
    }
    return res.status(200).json({ posts });
  }

  
};

export const addPost = async (req, res, next) => {
  const { title, description, image, user } = req.body;
  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (error) {
    return console.log(error);
  }
  if (!existingUser) {
    return res
      .status(400)
      .json({ message: "Unable to find user with this validating id" });
  }
  const post = new Post(
    {
      title,
      description,
      image,
      user,
    },
    Post
  );
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await post.save({ session });
    existingUser.posts.push(post);
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
  return res.status(200).json({ post });
};

export const updatePost = async (req, res, next) => {
  const { title, description } = req.body;
  const postId = req.params.id;
  let post;
  try {
    post = await Post.findByIdAndUpdate(postId, {
      title,
      description,
    });
  } catch (error) {
    return console.log(error);
  }
  if (!post) {
    return res.status(500).json({ message: "Unable to update the post " });
  }
  return res.status(200).json({ post });
};

export const getById = async (req, res, next) => {
  const id = req.params.id;
  let post;
  try {
    post = await Post.findById(id);
  } catch (error) {
    return console.log(error);
  }
  if (!post) {
    
    return res.status(404).json({ message: "No post found" });
  }
  return res.status(200).json({ post });
};

export const deletePost = async (req, res, next) => {
  const id = req.params.id;
  let post;
  try {
    post = await Post.findByIdAndRemove(id).populate("user");
    await post.user.posts.pull(post);
    await post.user.save();
  } catch (error) {
    return console.log(error);
  }
  if (!post) {
    return res.status(500).json({ message: "Unable to delete " });
  }
  return res.status(200).json({ message: "Successufully deleted " });
};

export const getByUserId = async (req, res, next) => {
  const userId = req.params.id;
  let userPosts;
  try {
    userPosts = await User.findById(userId).populate("posts");
  } catch (error) {
    return console.log(error);
  }
  if (!userPosts) {
    return res.status(404).json({ message: "No posts found " });
  }
  return res.status(200).json({ user: userPosts });
};
