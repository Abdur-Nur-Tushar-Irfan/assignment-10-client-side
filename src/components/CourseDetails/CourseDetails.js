import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';


const CourseDetails = () => {
    const details=useLoaderData()
    console.log(details)
    
    return (
        <div >
       
        {
            details.map(element=><CourseCard 
                key={element._id}
                element={element}
            
            
            ></CourseCard>)
        }
       
            
        </div>
    );
};

export default CourseDetails;