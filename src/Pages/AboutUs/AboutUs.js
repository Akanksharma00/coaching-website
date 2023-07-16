import React from 'react';
import { Grid } from '@mui/material';
import style from './Aboutus.module.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { instructors } from '../../Constants/about';


const AboutUs = () => {
  return (
    <>
      <Grid container style={{backgroundColor:"#FFF9EB"}}>
        <Grid item xs={4} md={6}><h4 className={style['title']} style={{marginTop:"1em"}}><span style={{color:"#4DC879"}}>About </span> <span>us</span></h4></Grid>
        <Grid item xs={8} md={6}><img src="./images/header.svg" className={style['header-img']}/></Grid>
      </Grid>

      <Grid container>
        <Grid item xs={5} md={5} >
          <img src='./images/aboutus.jpg' className={style['about-img']}/>
        </Grid>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={6} md={5} p={5}>
          <div className={style['about-div']}>
          <h6>About us</h6>
          <h4>Expertise <span style={{color:"#4DC879"}}>unparalleled</span> in education</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th.</p>
          <ul>
            <li><CheckCircleOutlineIcon className={style['tick-icon']}/> <span>Certified instructors</span></li>
            <li><CheckCircleOutlineIcon className={style['tick-icon']}/> <span>Easy registration</span></li>
            <li><CheckCircleOutlineIcon className={style['tick-icon']}/> <span>Simple payment methods</span></li>
            <li><CheckCircleOutlineIcon className={style['tick-icon']}/> <span>Access anywhere 24/7</span></li>
          </ul>
          <button className={style['explore-btn']}>Explore courses</button>
          </div>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <div style={{padding:"4em"}}>
          <h6 style={{textAlign:"center"}}>Who we are</h6>
          <h4 style={{textAlign:"center"}}>A journey of <span style={{color:"#4DC879"}} >passion</span> and <span style={{color:"#4DC879"}}>dedication</span></h4>
          <p style={{textAlign:"center"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown</p>
          </div>
        </Grid>
      </Grid>

      <Grid container style={{marginTop:"2em", paddingBottom:"2em"}}>
        <Grid item xs={6}>
          <h6 style={{color:"#000"}}>Our mission</h6>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={4}>
          <img src="./images/mission.jpg" style={{maxWidth:"100%"}}/>
        </Grid>
      </Grid>

      <Grid container style={{marginTop:"2em",paddingBottom:"2em"}}>
        <Grid item xs={1}></Grid>
        <Grid item xs={4}>
          <img src="./images/vision.jpg" style={{maxWidth:"100%"}}/>
        </Grid>
        <Grid item xs={6}>
          <h6 style={{color:"#000"}}>Our Vision</h6>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
        </Grid>
      </Grid>

      <Grid container>
        <h6 style={{textAlign:"center",marginTop:"2em"}}>Our Team</h6>
        <h4 style={{textAlign:"center",width:"100%"}}>Our <span style={{color:"#4DC879"}}>Instructors</span></h4>
        {instructors?.map((val)=>(
          <Grid item xs={6} md={3} p={2}>
            <div>
              <img src={val?.img} style={{maxWidth:"80%",margin:"auto"}} />
              <h6 style={{color:"#000",textAlign:"center"}}>{val?.name}</h6>
              <p style={{textAlign:"center"}}>{val?.designation}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    </>
    )
}

export default AboutUs