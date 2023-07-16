import React from 'react';
import {Grid} from '@mui/material';


const PageHeader = ({title, image}) => {
  return (
    <>
    <Grid container style={{backgroundColor:"#FFF9EB"}}>
        <Grid item xs={4} md={6} style={{color:"#4DC879", fontWeight:"600", fontSize:"80px", paddingTop:"1em",paddingLeft:"0.4em",paddingRight:"0.4em"}}>{title}</Grid>
        <Grid item xs={8} md={6}>
            <img src={image} width="500px"/>
        </Grid>
    </Grid>
    </>
    )
}

export default PageHeader