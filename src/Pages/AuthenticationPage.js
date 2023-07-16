import React, { useState } from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";

import LoginForm from "../Components/LoginForm";
import SignupForm from "../Components/SignupForm";

export const FormCard = styled.div`
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  box-shadow: 4px 4px #4DC879;
  // box-shadow: 4px 4px #f0f0f0;
  width: 60%;
  margin: auto;
  padding: 20px;
  margin-top: 4em;
`;
export const Title = styled.h4`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 0px;
`;
export const Description = styled.p`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
`;
export const FormComponentDiv = styled.div`
  width: 90%;
  margin-left: 1em;
  padding-top: 1em;
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  float: left;
  color: rgba(0, 0, 0, 0.7);
`;

export const Input = styled.input`
  font-size: 16px;
  width: 100%;
  height: 2.5em;
  background-color: #fff;
  border: 1px solid #bfbfbf;
  border-radius: 2px;
  padding-left: 0.5em;
`;

export const Button = styled.button`
  width: 92%;
  font-size: 16px;
  padding: 0.8em;
  color: #fff;
  background-color: #4DC879;
  // background-color: #0171d3;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  margin-left: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignupButton = styled(Button)`
  margin-top: 2em;
`;

export const GmailLoginButton = styled(Button)`
  background-color: #fff;
  color:rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.6);
  margin-bottom: 1em;
  margin-top: 2em;
`;

export const Link = styled.p`
  color: #4DC879;
  // color: #0b57d4;
  cursor: pointer;
`;

export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

export const Line = styled.div`
  flex-grow: 1;
  border-top: 0.1em solid #bfbfbf;
`;

const AuthenticationPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchBetweenForms = (val) => {
    setIsLogin(val);
  };

  return (
    <Grid container>
      <Grid item xs={1} md={3}></Grid>
      <Grid item xs={10} md={6}>
        {isLogin ? (
          <LoginForm switchBetweenForms={switchBetweenForms} />
        ) : (
          <SignupForm switchBetweenForms={switchBetweenForms} />
        )}
      </Grid>
      <Grid item xs={1} md={3}></Grid>
    </Grid>
  );
};

export default AuthenticationPage;
