import Header from "./components/Header";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Posts from "./components/Posts";
import UserPosts from "./components/UserPosts";
import AddPost from "./components/AddPost";
import PostDetail from "./components/PostDetail";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authActions } from "./store";
import Main from "./components/main";
import NewScreen from "./components/newScreen";
import "./App.css";
import Foote from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(authActions.login());
    }
  }, [dispatch]);
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          {!isLoggedIn ? (<Route path="/auth" element={<Auth />} />) : (
            <>
              <Route path="/posts" element={<Posts />} />
              <Route path="/posts/add" element={<AddPost />} />
              <Route path="/myPosts" element={<UserPosts />} />

              <Route path="/new" element={<NewScreen />} />
              <Route path="/myPosts/:id" element={<PostDetail />} />
            </>
          )}
        </Routes>
      </main>

      <Foote />
    </React.Fragment>
  );
}

export default App;
