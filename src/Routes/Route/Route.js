import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import Course from "../../Pages/Courses/Course/Course";
import Home from "../../Pages/Home/Home";

export const routes = createBrowserRouter([
 
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/course/:id',
                element:<Course></Course>
            }
        ]
    }
])