import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Gallery from "../Pages/Gallery/Gallery";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Service from "../Pages/Service/Service";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
               
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
                path:"/services",
                element:<Services></Services>
            },
            {
                path:"/services/:id",
                element:<PrivateRoute><Service></Service></PrivateRoute>,
            },
            {
                path:'/gallery',
                element:<Gallery></Gallery>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
        ]
    }
])
    

export default Routes;