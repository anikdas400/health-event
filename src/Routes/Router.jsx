import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import Login from "../share/Login";
import Register from "../share/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>

        },
        {
            path:"/services",
            element:<Services></Services>

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