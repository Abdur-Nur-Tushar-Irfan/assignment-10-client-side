import { Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import ForAllCourse from "../ForAllCourse/ForAllCourse";
import './AllCourses.css'



const AllCourses = () => {
    const allCourse = useLoaderData();
    console.log(allCourse)




    return (
        <div className=" row-cols-1 row-cols-lg-2 g-4 row mt-3 me-3 ">
            
                
                    {
                        allCourse.map(course => <ForAllCourse
                            course={course}

                        ></ForAllCourse>)
                    }
            
        </div>
    );
};

export default AllCourses;