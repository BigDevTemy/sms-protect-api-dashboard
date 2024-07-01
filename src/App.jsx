import { useState } from 'react'
import reactLogo from './assets/react.svg'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,Route,Routes
} from "react-router-dom";
import './App.css'
// import router from './route.js'
// import Login from './component/login'
// import SignUp from './component/signup'
import Dashboard from './component/dashboard'
import AppLet from './component/dashboard/body'
import ErrorPage from './component/error'
import Welcome from './component/Welcome'
import ApiKey from './component/dashboard/apikeys'
// import Usermanagement from './component/dashboard/usermanagement'
// import Settings from './component/dashboard/settings'

function App() {
  

  return (
    
    // <RouterProvider router={router} />
    <Router>
      <Routes>
        <Route path='/' element={<Welcome/>} />
        {/* <Route path='/register' element={<SignUp/>} errorElement={<ErrorPage/>} /> */}
        <Route path='/dashboard' element={<Dashboard/>} errorElement={<ErrorPage/>} >
          <Route path='app' element={<AppLet/>} />
          <Route path='apikey' element={<ApiKey/>} />
          {/* <Route path='settings' element={<Settings/>} /> */}
        </Route>

      </Routes>
     
    </Router>

    ) 
  
}

export default App
