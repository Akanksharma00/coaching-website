import React from "react";
import { Grid } from "@mui/material";
import style from "./ContactUs.module.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const ContactUs = () => {
  return (
    <>
      <Grid container style={{ backgroundColor: "#FFF9EB" }}>
        <Grid item sm={4} xs={12} md={6}>
          <h4 className={style["title"]} style={{ marginTop: "1em" }}>
            <span style={{ color: "#4DC879" }}>Contact </span> <span>us</span>
          </h4>
        </Grid>
        <Grid item sm={8} xs={0} md={6}>
          <img
            src="./images/contactus-header.png"
            className={style["header-img"]}
          />
        </Grid>
      </Grid>

      <Grid container>
        
        <Grid item xs={12} md={6}>
            <form className={style['contactus-form']}>
                <h6>Get in touch</h6>
                <div>
                    <label>Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="number" />
                </div>
                <div>
                    <label>Subject</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Enter your message</label>
                    <textarea />
                </div>
                <button type="submit">Submit</button>
            </form>
        </Grid>

        <Grid item xs={12} md={6}>
            <div>
                <div className={style['contactus-card']}>
                    <LocationOnIcon className={style['contactus-icon']}/>
                    <p>Plaza X, XY Floor, XYZ Street, XYZ</p>
                </div>
                <div className={style['contactus-card']}>
                    <PhoneIcon className={style['contactus-icon']}/>
                    <p>123456789</p>
                </div>
                <div className={style['contactus-card']}>
                    <EmailIcon className={style['contactus-icon']}/>
                    <p>xyz@email.com</p>
                </div>
            </div>
        </Grid>
      </Grid>

    </>
  );
};

export default ContactUs;
