import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import Login from "../share/Login";
import Register from "../share/Register";
import Detail from "../pages/Detail";
import PrivateRoute from "./PrivateRoute";
import Error from "../Error/Error";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch("/blogs.json")

        },
        {
          path:"/blogs/:id",
          element:<PrivateRoute><Detail></Detail></PrivateRoute>,
          loader:()=>fetch("../blogs.json")
        },
        {
            path:"/services",
            element:<PrivateRoute><Services></Services></PrivateRoute>

        },
        {
            path:"/about",
            element:<About></About>

        },
        {
            path:"/login",
            element:<Login></Login>

        },
        {
            path:"/register",
            element:<Register></Register>

        },

      ]
    },
  ]);

  export default router