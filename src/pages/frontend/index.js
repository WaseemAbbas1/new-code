import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Home1'
import About from './About'
import Contect from './Contect'
import Hooks from "./hooks"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
export default function Frontend() {
  return (
    <>
    <Header/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contect' element={<Contect/>}/>
      <Route path='/hooks/*' element={<Hooks/>}/>
    </Routes>
    <Footer/>
    </>
  )
}
