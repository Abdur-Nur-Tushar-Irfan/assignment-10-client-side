import { createBrowserRouter } from "react-router-dom";
import AllCourses from "../components/AllCourses/AllCourses";
import Blog from "../components/Blog/Blog";
import CheckOut from "../components/CheckOut/CheckOut";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Faq from "../components/Faq/Faq";


import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Courses from "../Courses/Courses";

import ErrorPage from "../Errorpage/ErrorPage";
import Home from "../Home/Home";
import Main from "../Main/Main";
import PrivateRoute from '../PrivateRoute/PrivateRoute'


export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
           
            {
                path:'/',
                element:<Home></Home>
            },
           
            {
                path:'/home',
                element:<Home></Home>
            },
          
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/faq',
                element:<Faq></Faq>

            },
            {
                path:'/courseCheckout',
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            }

        ]
    },
    {
        path:"/courses",
        element:<Courses></Courses>,
        children:[
            {
                path:'/courses',
                loader: () => fetch('https://educational-website-server-abdur-nur-tushar-irfan.vercel.app/allCourses'),
                element:<AllCourses></AllCourses>
            },
            
                {
                    path:'/courses/:id',
                    loader: ({params})=>fetch (`https://educational-website-server-abdur-nur-tushar-irfan.vercel.app/category/${params.id}`),
                    element:<CourseDetails></CourseDetails>
                    
                },
               
                
               
        ]
    }
    
  


])