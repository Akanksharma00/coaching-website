import React from 'react';
import { Grid } from '@mui/material';
import style from './CoursePage.module.css';
import Instructor from './Instructor';

const KeyFeatures = ({keyFeaturesData, name, designation, yoe, instructor_img}) => {
  return (
    <Grid container className={style['key-features-container']}> 
        <Grid item xs={12}>
            <h6 className={style['key-features-heading']}>Key Features</h6>
        </Grid>
        <Grid container >
            <Grid item sm={12} xs={12} md={7}>
                {keyFeaturesData?.map((val)=>(
                    <div className={style['key-features-div']}>
                        <span className={style['key-features-title']}>{val?.title}: </span>
                        <span>{val?.desc}</span>
                    </div>
                ))}
            </Grid>
            <Grid item sm={12} xs={12} md={5} >
                <Instructor name={name} designation={designation} yoe={yoe} instructor_img={instructor_img}/>
            </Grid>
        </Grid>
    </Grid>
    )
}

export default KeyFeatures