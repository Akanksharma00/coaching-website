import React from "react";
import style from "../Pages/Events/Events.module.css";

const Event = ({
  src,
  date,
  venue,
  topic,
  desc,
  instructor,
  page,
  category,
}) => {
  return (
    <div className={style["event-container"]}>
      <img src={src} />
      <p className={style["event-details"]}>
        <span className={style["event-date"]}>{date}</span>
        {page === "blog" ? (
          <span className={style["event-venue"]}>{category}</span>
        ) : (
          <span className={style["event-venue"]}>{venue}</span>
        )}
      </p>
      <h6>{topic}</h6>
      <p className={style["event-desc"]}>{desc}</p>
      <p className={style["event-instructor"]}>
        {page === "blog" ? (
          <>
            <b>Owner: </b>
            {instructor}
          </>
        ) : (
          <>
            <b>Instructor: </b>
            {instructor}
          </>
        )}
      </p>
      <button>Learn more</button>
    </div>
  );
};

export default Event;
