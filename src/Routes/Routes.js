import { createBrowserRouter } from "react-router-dom";
import AllCourses from "../components/AllCourses/AllCourses";
import Blog from "../components/Blog/Blog";


import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Courses from "../Courses/Courses";

import ErrorPage from "../Errorpage/ErrorPage";
import Home from "../Home/Home";
import Main from "../Main/Main";


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

        ]
    },
    {
        path:'courses',
        element:<Courses></Courses>
    }
  


])