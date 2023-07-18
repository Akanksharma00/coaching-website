import React from 'react';
import style from './CoursePage.module.css';

const Instructor = ({name, designation, yoe, instructor_img}) => {
  return (
    <div className={style['instructor-container']}>
        <img src={instructor_img} className={style['instructor-img']}/>
        <h6>Instructor</h6>
        <p>{name}</p>
        <p>{designation}</p>
        <p>{yoe} years of experience</p>
    </div>
  )
}

export default Instructor