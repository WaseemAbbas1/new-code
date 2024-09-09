import React from 'react'
import {Route,Routes} from "react-router-dom"
import Login from './Login'
import Register from "./Register"
import ForgetPassword from "./ForgetPassword"
export default function Auth() {
  return (
    <>
    <Routes>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='forgetpassword' element={<ForgetPassword/>}/>
    </Routes>
    </>
  )
}
