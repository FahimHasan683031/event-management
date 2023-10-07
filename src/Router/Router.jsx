import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ServiceDetails from "../Pages/ServiceDetails";
import Privet from "../Privet/Privet";
import Services from "../Components/Services";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: ()=>fetch("/services.json")
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
          element:<Services></Services>
        }
      ]
    },
  ]);

  export default router