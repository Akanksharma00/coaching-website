import React from 'react'
import Heading from '../../Components/Heading';
import { Grid } from '@mui/material';
import style from '../Events/Events.module.css';
import { blogs } from '../../Constants/courses';
import Event from '../../Components/Event';


const Blogs = () => {
  return (
    <>
      <Heading titleOne="Blog" url="./images/blog.png"/>

      {/* Upcoming Events Section */}
    <Grid container className={style['event-section']} style={{marginTop: "2em"}}>
      {blogs?.map((val)=>(
        <Grid item xs={12} md={4}>
          <Event src={val?.img} date={val?.date} category={val?.category} topic={val?.topic} desc={val?.desc} instructor={val?.instructor} page="blog"/>
        </Grid>
      ))}
    </Grid>

    </>
  )
}

export default Blogs