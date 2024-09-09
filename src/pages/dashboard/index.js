import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from './Home'
import About from './About'
import Contect from './Contect'
import HeaderDas from '../../components/HeaderDas/HeaderDas'

export default function Dashboard() {
  return (
    <>
    <HeaderDas/>
    <Routes>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contect' element={<Contect/>}/>
    </Routes>
    </>
  )
}
