import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ServiceDetails from "../Pages/ServiceDetails";
import Privet from "../Privet/Privet";
import Blog from "../Pages/Blog/Blog";
import ServicesPage from "../Pages/ServicesPage";
import ErrorPage from "../Pages/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: ()=>fetch("/services.json")
        },
        {
          path:'/blog',
          element:<Privet><Blog></Blog></Privet>
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
            path:'/:id',
            element:<Privet><ServiceDetails></ServiceDetails></Privet>,
            loader: ()=>fetch("/services.json")
        },
        {
          path:'/services',
          element:<Privet><ServicesPage></ServicesPage></Privet>
        }
      ]
    },
  ]);

  export default router