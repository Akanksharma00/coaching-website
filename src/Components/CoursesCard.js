import React from 'react';
import style from '../Pages/Home/Home.module.css';
import {Link} from 'react-router-dom';

const CoursesCard = ({ img, title, desc, link}) => {
  return (
    <div className={style['card']}>
        <img src={img} />
        <h6>{title}</h6>
        <p>{desc}</p>
        <button>
            <Link to={link} className={style['link']}>Explore more</Link></button>
    </div>
  )
}

export default CoursesCard