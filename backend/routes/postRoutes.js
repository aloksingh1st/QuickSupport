import express from "express";
import {
  addPost,
  deletePost,
  getAllPost,
  getById,
  getByUserId,
  updatePost,
} from "../controllers/Post-controller";

const postRouter = express.Router();
postRouter.get("/", getAllPost);
postRouter.post("/add", addPost);
postRouter.put("/update/:id", updatePost);
postRouter.get("/:id", getById);
postRouter.delete("/:id", deletePost);
postRouter.get("/user/:id",getByUserId)

export default postRouter;




//"mongodb+srv://hum-amulya:amulya18jan@cluster0.ijcwpcx.mongodb.net/"
