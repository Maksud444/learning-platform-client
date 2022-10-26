import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Component/Blog/Blog";
import CheckOut from "../../Component/CheckOut/CheckOut";
import Courses from "../../Component/Courses/Courses";
import Faq from "../../Component/Faq/Faq";
import FullCourseDetails from "../../Component/FullCourseDetails/FullCourseDetails";
import Home from "../../Component/Home/Home";
import Login from "../../Component/Login/Login";
import NotFound from "../../Component/NotFound/NotFound";
import Register from "../../Component/Register/Register";
import Main from "../../Layout/Main";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


export  const  router =createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
               path:"/register",
               element:<Register></Register>
            },{
                path:"/login",
                element:<Login></Login>
            },{
                path:"/courses",
                element:<Courses></Courses>,
                loader:()=>fetch('https://learn-web-assignment-server.vercel.app/courses')
            },{
                path:"/courses/:id",
                element:<FullCourseDetails></FullCourseDetails>,
                loader:({params})=>fetch(`https://learn-web-assignment-server.vercel.app/courses/${params.id}`)
            },{
                path:"/checkout/:id",
                element:<PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
                loader:({params})=>fetch(`https://learn-web-assignment-server.vercel.app/courses/${params.id}`)
            },{
                path:"/blog",
                element:<Blog></Blog>

            },
            {
                   path:"/faq",
                   element:<Faq></Faq>
            },
              
            
            {
                path:"*",
                element:<NotFound></NotFound>

            }
        ]
    }
])