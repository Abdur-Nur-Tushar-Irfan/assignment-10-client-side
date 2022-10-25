import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CourseList = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div className='ms-4'>
            {
                data.map(element=><p
                key={element.id}> 
                <Link className='text-decoration-none' to={`/courses/${element.id}`}>{element.name}</Link>
                
                </p>)
            }
            
        </div>
    );
};

export default CourseList;