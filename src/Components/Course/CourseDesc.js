import React from 'react';
import {Grid} from '@mui/material';
import style from './CoursePage.module.css';

const CourseDesc = ({url2, courseTitle, courseDesc}) => {
  return (
    <Grid container className={style['courseDesc-container']}>
        <Grid item xs={10} sm={5} md={5}>
            <img src={url2} className={style['courseDesc-img']}/>
        </Grid>
        <Grid item xs={1} sm={1} md={1}></Grid>
        <Grid item  xs={12} sm={6} md={5} p={5}>
            <h6 className={style['title']}>{courseTitle}</h6>
            <p>{courseDesc}</p>
            <button className={style['explore-btn']}>Enroll now</button>
        </Grid>
    </Grid>
  )
}

export default CourseDesc