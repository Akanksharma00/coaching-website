import React, {useState, useEffect} from 'react';
import { Grid } from '@mui/material';
import style from './Home.module.css';
import { Link } from 'react-router-dom';
import CoursesCard from '../../Components/CoursesCard';
import { courses, instructors } from '../../Constants/courses';
import InstructorsCard from '../../Components/InstructorsCard';

const HomePage = () => {
  const [width, setWidth] = useState(window?.innerWidth);

  const updateDimensions = () => {
    setWidth(window?.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  });
  return (
    <>
    {/* Hero section */}
    <Grid container>
      <Grid item xs={12}>
        <video autoPlay loop muted >
          <source src='./images/sample.mp4' type="video/mp4"
          />
          </video>
      </Grid>
    </Grid>
    
    {/* Explore Courses Section */}
    <Grid container >
      <Grid item xs={12} md={12}>
        <h6 className={style['courses-head']}>Our Courses</h6>
      </Grid>
      <Grid container className={style['courses-card-comntainer']}>
      {courses?.map((val)=>(
        <Grid item xs={12} md={4}>
        <CoursesCard img={val?.img} title={val?.title} desc={val?.desc} link={val?.link}/>
        </Grid>
      ))}
      </Grid>
    </Grid>


    {/* Call to action Section */}
    <Grid container style={{backgroundColor:"#FFF9EB"}}>
        <Grid item xs={12} md={12}>
          <h4 className={style['title']}><span>Discover the </span><span style={{color:"#4DC879"}}>path </span> <span>to your </span><span style={{color:"#4DC879"}}>dreams </span><span> with our </span><span style={{color:"#4DC879"}}>events. </span></h4>
        </Grid>
        <Grid item xs={12} md={12}>
          <button className={style['action-btn']}>

          <Link to='/events' style={{textDecoration:"none", color:"inherit"}}>Explore Events</Link>
          </button>
        </Grid>
        {/* <Grid item xs={8} md={6}><img src="./images/home-header.png" className={style['header-img']}/></Grid> */}
      </Grid>

    {/* Our Instructors Section */}
    <Grid container>
      <Grid item xs={12}>
        <h6 className={style['courses-head']}>Our Team</h6>
        <h4 className={style['courses-subhead']}>Our <span style={{color:"#4DC879"}}>Instructors</span></h4>
      </Grid>
      <Grid container className={style['courses-card-comntainer']}>
        {instructors?.map((val)=>(
          <Grid item xs={12} md={3}>
            <InstructorsCard img={val?.img} name={val?.name} subject={val?.subject}/>
          </Grid>
        ))}
      </Grid>
    </Grid>
    </>
  )
}

export default HomePage