import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <header>
       <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container">
    <Link to="/" className="navbar-brand" >Logo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link " >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" >About us</Link>
        </li>
        <li className="nav-item">
          <Link to="/contect" className="nav-link" >Contect us</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hooks
          </Link>
          <ul className="dropdown-menu">
            <li><Link to="/hooks/state" className="dropdown-item" >UseState</Link></li>
            <li><Link to="/hooks/effect" className="dropdown-item" >UseEffect</Link></li>
            <li><Link to="/hooks/ref" className="dropdown-item" >UseRef</Link></li>
            <li><Link to="/hooks/memo" className="dropdown-item" >UseMemo</Link></li>
            <li><Link to="/hooks/context" className="dropdown-item" >UseContext</Link></li>
            <li><Link to="/hooks/reducer" className="dropdown-item" >UseReducer</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Auth
          </Link>
          <ul className="dropdown-menu">
            <li><Link to="/auth/login" className="dropdown-item" >Login</Link></li>
            <li><Link to="/auth/register" className="dropdown-item" >Register</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link to="/auth/forgetpassword" className="dropdown-item" >Forget Password</Link></li>
          </ul>
        </li>
       
      </ul>
      <form className="d-flex ms-auto" >
        <Link to="/dashboard/home" className="btn btn-dark" >Dashboard</Link>
      </form>
     
    </div>
  </div>
</nav>
    </header>
  )
}
