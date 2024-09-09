import React from 'react'
import {Link} from "react-router-dom"
export default function HeaderDas() {
  return (
    <header>
         <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
  <div className="container">
    <Link to="/" className="navbar-brand" >Frontend</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/dashboard/home" className="nav-link " >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard/about" className="nav-link" >About us</Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard/contect" className="nav-link" >contect</Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
    </header>
  )
}
