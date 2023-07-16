import React,{useState} from 'react';
import { courses } from '../Constants/courses';

const Dropdown = () => {
    const [selectedOption, setSelectedOption] = useState('Category');
    const [selectedSubOption, setSelectedSubOption] = useState('Course');

  return (
    <div>
        <select value={selectedOption} onChange={(e)=>setSelectedOption(e?.target?.value)}>
            {courses?.map((val,index)=>(
                <option key={index} value={val?.class}>{val?.class}</option>
            ))}
        </select>
        <select value={selectedSubOption} onChange={(e)=>setSelectedSubOption(e?.target?.value)}>
            {courses?.filter((val)=>val?.class === selectedOption)[0]?.courses?.map((val, index)=>(
                <option key={index} value={val}>{val}</option>
            ))}
        </select>
        <button>Submit</button>
    </div>
  )
}

export default Dropdown