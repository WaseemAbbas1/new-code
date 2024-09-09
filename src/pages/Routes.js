import React from 'react'
import {Routes, Route} from "react-router-dom"
import Auth from './auth'
import Dashboard from './dashboard'
import Frontend from './frontend'

export default function Index() {
  return (
    <>
    <Routes>
      <Route path='/*' element={<Frontend/>}/>
      <Route path='/auth/*' element={<Auth/>}/>
      <Route path='/dashboard/*' element={<Dashboard/>}/>
    </Routes>
    </>
  )
}
