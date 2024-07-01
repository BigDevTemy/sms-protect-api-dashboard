import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Login from '../component/login'
  import Signup from '../component/signup'
  import Dashboard from '../component/dashboard'

  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Login/>,
    // },
    // {
    //   path: "/register",
    //   element: <Signup/>,
    // },
    {
        path: "/",
        element: <Dashboard/>,
      },
  ]);

  export default router;