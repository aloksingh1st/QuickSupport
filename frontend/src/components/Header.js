import React from "react";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [value, setValue] = useState();
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "rgb(255,255,255)",
        color: "black",
        fontWeight: "bold",
      }}
    >
      <Toolbar>
          <img
            src="https://scalebranding.com/wp-content/uploads/2021/09/LOGO-EP-PE.jpg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />

        <Link to="/">
          <Typography sx={{ margin: 1, fontSize: 28, fontWeight: "700" }}>
            QuickSupport
          </Typography>
        </Link>

        {isLoggedIn && (
          <Box display="flex" marginLeft={4} marginRight={"auto"}>
            <Tabs value={value} onChange={(e, val) => setValue(val)}>
              <Tab
                sx={{
                  margin: 1,
                  color: "rgba(25,135,84,1)",
                 
                }}
                LinkComponent={Link}
                to="/posts"
                label="All Posts"
              />
              <Tab
                sx={{
                  margin: 1,
                  color: "rgba(25,135,84,1)",
                }}
                LinkComponent={Link}
                to="/myPosts"
                label="My Posts"
              />
              <Tab
                sx={{
                  margin: 1,
                  color: "rgba(25,135,84,1)",    
                }}
                LinkComponent={Link}
                to="/posts/add"
                label="Add Post"
              />
            </Tabs>
          </Box>
        )}

        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
              <Link to="/auth">
                <Button
                  sx={{
                    margin: 1,
                    borderRadius: 1,
                    border: 1,
                    color: "rgba(25,135,84,1)",
                    borderColor: "rgba(25,135,84,1)",
                  }}
                >
                  Login
                </Button>
              </Link>
            </>
          )}
          {isLoggedIn && (
            <Button
              onClick={() => dispatch(authActions.logout())}
              LinkComponent={Link}
              to="/"
              sx={{
                margin: 1,
                borderRadius: 1,
                border: 1,
                color: "rgba(25,135,84,1)",
                borderColor: "rgba(25,135,84,1)",
              }}
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
