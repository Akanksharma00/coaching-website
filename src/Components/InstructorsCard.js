import React from 'react';
import style from '../Pages/Home/Home.module.css';

const InstructorsCard = ({img, name, subject}) => {
  return (
    <div className={style['instructor-card']}>
        <img src={img} />
        <div className={style['instructor-subcard']}>
        <h6>{name}</h6>
        <p>{subject}</p>
        </div>
    </div>
  )
}

export default InstructorsCard