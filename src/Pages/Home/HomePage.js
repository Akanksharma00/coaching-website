import React from 'react';
import { Grid } from '@mui/material';
import style from './Home.module.css';

const HomePage = () => {
  return (
    <>
    <Grid container style={{backgroundColor:"#FFF9EB"}}>
        <Grid item xs={4} md={6}>
          <h4 className={style['title']} style={{marginTop:"1em"}}><span>Discover the </span><span style={{color:"#4DC879"}}>path </span> <span>to your </span><span style={{color:"#4DC879"}}>dreams </span><span> with our </span><span style={{color:"#4DC879"}}>courses. </span></h4>
        </Grid>
        <Grid item xs={8} md={6}><img src="./images/home-header.png" className={style['header-img']}/></Grid>
      </Grid>
    </>
  )
}

export default HomePage