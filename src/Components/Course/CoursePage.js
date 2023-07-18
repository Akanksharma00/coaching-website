import React from 'react';
import Heading from '../Heading';
import CourseDesc from './CourseDesc';
import KeyFeatures from './KeyFeatures';

const CoursePage = ({titleOne,titleTwo,titleThree, url, url2, courseTitle, courseDesc, keyFeaturesData,name, designation, yoe, instructor_img}) => {
  return (
    <>
      <Heading titleOne={titleOne} titleTwo={titleTwo} titleThree={titleThree} url={url}/>
      <CourseDesc url2={url2} courseTitle={courseTitle} courseDesc={courseDesc}/>
      <KeyFeatures keyFeaturesData={keyFeaturesData} name={name} designation={designation} yoe={yoe} instructor_img={instructor_img}/>
    </>
  )
}

export default CoursePage