import React from "react";
import {Grid} from '@mui/material';
import style from '../Styles/Heading.module.css';

const Heading = ({titleOne, titleTwo, titleThree, url}) => {
  return (
    <Grid container style={{ backgroundColor: "#FFF9EB" }}>
      <Grid item sm={4} xs={12} md={6}>
        <h4 className={style["title"]} style={{ marginTop: "1em" }}>
          <span style={{ color: "#4DC879" }}>{titleOne} </span> <span>{titleTwo}</span> <span style={{ color: "#4DC879" }}>{titleThree}</span>
        </h4>
      </Grid>
      <Grid item sm={8} xs={0} md={6}>
        <img src={url} className={style["header-img"]} />
      </Grid>
    </Grid>
  );
};

export default Heading;
