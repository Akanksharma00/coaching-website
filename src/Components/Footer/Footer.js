import React from 'react';
import style from './Footer.module.css';
import { Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer className={style['footer-container']}>
        <Grid container>
            <Grid item xs={12} md={6} p={4}>
                <h6>Logo</h6>
                <form className={style['footer-form']}>
                  <input type='email' placeholder='Enter your email'/>
                  <button type='submit'>Submit</button>
                </form>
                <div className={style['social-media-link']}>
                <YouTubeIcon style={{color:"#ff0000"}}/>
                <FacebookIcon style={{color:"#1877f2"}}/>
                <InstagramIcon style={{color:"#E1306C"}}/>
                <TwitterIcon style={{color:"#1DA1F2"}}/>
                </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <p style={{color:"#fff", fontWeight:"600"}}>Top Courses</p>
              <ul>
                <li style={{color:"#fff"}}>Web development</li>
                <li style={{color:"#fff"}}>CAT Enterance exam</li>
                <li style={{color:"#fff"}}>Digital Marketing</li>
                <li style={{color:"#fff"}}>Business Analytics</li>
              </ul>
            </Grid>
            <Grid item xs={12} md={3}>
            <p style={{color:"#fff", fontWeight:"600"}}>Contact us</p>
            <p style={{color:"#fff"}}>Plaza X, XY Floor, XYZ Street, XYZ</p>
            <p style={{color:"#fff"}}>123456789</p>
            <p style={{color:"#fff"}}>xyz@email.com</p>
            </Grid>
        </Grid>
        <Grid container style={{borderTop: "1px solid #fff"}}>
          <Grid item xs={12} style={{color:"#fff",display:"flex", justifyContent:"center"}}>Made with  <span><FavoriteIcon style={{color:"red", width:"16px", paddingLeft:"4px", paddingRight:"4px"}}/></span> in India</Grid>
        </Grid>
    </footer>
  )
}

export default Footer