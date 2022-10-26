import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';


const CourseDetails = () => {
    const details=useLoaderData()
    console.log(details)
    
    return (
        <div>
        <h2>this is course CourseDetails{details.length}</h2>
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