import React from "react";
import { Typography } from "@mui/material";

const LoginHeader = () => {
  return (
    <>
      <Typography  sx={{ color: "white" }}>
        Welcome Back!
      </Typography>
      <Typography sx={{color:'#b9bbbe'}}>We are glad you also like Discord!</Typography>
    </>
  );
};

export default LoginHeader;
