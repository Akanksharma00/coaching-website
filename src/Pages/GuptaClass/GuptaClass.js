import React from "react";
import CoursePage from "../../Components/Course/CoursePage";
import { key_features_mathematics } from "../../Constants/courses";

const GuptaClass = () => {
  return (
    <>
      <CoursePage
        titleOne="21 Days"
        titleTwo="Gupta"
        titleThree="Classes"
        url="../images/mathematics.png"
        url2="../images/specialClass1.jpg"
        courseTitle="21 Days Gupta Classes - Mastering the World of Numbers"
        courseDesc="Our Mathematics course is tailored for students and enthusiasts of all levels, from beginners seeking a solid foundation to advanced learners hungry for new challenges. Whether you're aiming to strengthen your mathematical prowess for academic pursuits or simply eager to explore the wonders of this universal language, this course has something to offer to everyone."
        keyFeaturesData = {key_features_mathematics}
        instructor_img="../images/profile1.jpg"
        name="John"
        designation ="Associate Professor"
        yoe="10+"
      />
    </>
  );
};

export default GuptaClass;
