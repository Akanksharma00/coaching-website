import React from 'react';
import Heading from '../Heading';
import CourseDesc from './CourseDesc';
import KeyFeatures from './KeyFeatures';

const CoursePage = ({titleOne,titleTwo,titleThree, url, url2, courseTitle, courseDesc, keyFeaturesData}) => {
  return (
    <>
      <Heading titleOne={titleOne} url={url}/>
      <CourseDesc url2={url2} courseTitle={courseTitle} courseDesc={courseDesc}/>
      <KeyFeatures keyFeaturesData={keyFeaturesData}/>
    </>
  )
}

export default CoursePage