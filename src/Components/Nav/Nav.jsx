import React from 'react'
import './Nav.css'
import LOGO from '../Images/LGO.png'
import {Link} from 'react-router-dom'
export default function Nav() {
  return (
    
    <>
  
    <nav className="navbar navbar-expand-lg bg-light sticky-top">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src={LOGO}  style={{width:"180px", height:"50px"}} />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#" style={{color:"black"}}>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color:"black"}}>
           Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color:"black"}}>
          About Us 
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link " style={{color:"black"}}>Contact Us</a>
        </li>
    
        <li className="nav-item">
         <button className='btn btn-primary' style={{backgroundColor: "#36bbf7"}}>SING UP</button>
        </li>

        <li className="nav-item">
          <Link to="/Dashboard">
         <button className='btn btn-primary' style={{backgroundColor: "#36bbf7"}}>Dashboard</button>
         </Link>
        </li>

      </ul>
    </div>
  </div>
</nav>

    
    </>
  )
}
