import React from "react";
import { styled } from "styled-components";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export const Nav = styled.nav`
    // background-color: #FFF9EB;
`;

export const Ul = styled.ul`
    list-style: none;
    display: flex;
`;

export const Li = styled.li`
    text-decoration: none;
    margin-right: 2em;
    position: relative;
`;

export const NavButton = styled.button`
    border: none;
    background-color: #FFF9EB;
    color: inherit;
    font-size: 16px;
    display: flex;
    align-items: center;
    width: 100%;
    
`;

const Header = () => {
  return (
    <header>
        <Grid container style={{backgroundColor:"#fff9eb"}}>
            <Grid item xs={2} md={2} p={2}>
                <Link to="/" style={{textDecoration:"none"}}>Logo</Link>
            </Grid>
            <Grid item xs={8} md={8}><Navbar /></Grid>
            <Grid item xs={2} md={2} p={2}>Profile</Grid>
        </Grid>
    </header>
  );
};

export default Header;
