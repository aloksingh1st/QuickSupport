import express from "express";
import mongoose from "mongoose";
import postRouter from "./routes/postRoutes.js";
import router from "./routes/userRoutes.js";
import cors from "cors";



mongoose
.connect("mongodb+srv://aloksingh1st:gGTmaAxqtHXKCMgW@cluster0.cdp5ir3.mongodb.net/")
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });



  // gGTmaAxqtHXKCMgW



const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/post", postRouter);




// mongoose
//   .connect(
//     "mongodb+srv://hum-amulya:amulya18jan@cluster0.ijcwpcx.mongodb.net/"
//   )
//   .then(() => app.listen(5001))
//   .then(() =>
//     console.log("Connected to database and listening to localhost 5001")
//   )
//   .catch((err) => console.log(err));



  const port = 5001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

