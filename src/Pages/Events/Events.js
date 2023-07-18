import React from 'react';
import { Grid } from '@mui/material';
import style from './Events.module.css';
import { upcoming_events, previous_events } from '../../Constants/courses';
import Event from '../../Components/Event';

const Events = () => {
  return (
    <>
    <Grid container style={{backgroundColor:"#FFF9EB"}}>
        <Grid item sm={4} xs={12} md={6}><h4 className={style['title']} style={{marginTop:"1em"}}><span style={{color:"#4DC879"}}>Events </span></h4></Grid>
        <Grid item sm={8} xs={0} md={6}><img src="./images/event.png" className={style['header-img']}/></Grid>
    </Grid>

    {/* Upcoming Events Section */}
    <Grid container className={style['event-section']}>
      <Grid item xs={12}>
        <h6 className={style['event-heading']}>Upcoming Events</h6>
      </Grid>
      {upcoming_events?.map((val)=>(
        <Grid item xs={12} md={4}>
          <Event src={val?.img} date={val?.date} venue={val?.venue} topic={val?.topic} desc={val?.desc} instructor={val?.instructor}/>
        </Grid>
      ))}
    </Grid>

    {/* Previous Events Section */}
    <Grid container className={style['event-section']}>
      <Grid item xs={12}>
        <h6 className={style['event-heading']}>Previous Events</h6>
      </Grid>
      {previous_events?.map((val)=>(
        <Grid item xs={12} md={4}>
          <Event src={val?.img} date={val?.date} venue={val?.venue} topic={val?.topic} desc={val?.desc} instructor={val?.instructor}/>
        </Grid>
      ))}
    </Grid>
    </>
  )
}

export default Events