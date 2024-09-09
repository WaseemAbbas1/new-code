import React from 'react'
import {Route,Routes} from "react-router-dom"
import UseState from "./UseState"
import UseEffect from "./UseEffect"
import UseRef from "./UseRef"
import UseMemo from './UseMemo'
import UseReducer from './UseReducer'
import UseContext from "./UseContext"
export default function index() {
  return (
<Routes>
  <Route path='state' element= {<UseState/>}/>  
  <Route path='effect' element= {<UseEffect/>}/>  
  <Route path='ref' element= {<UseRef/>}/>  
  <Route path='memo' element= {<UseMemo/>}/>  
  <Route path='context' element= {<UseContext/>}/>  
  <Route path='reducer' element= {<UseReducer/>}/>  
</Routes>
  )
}
