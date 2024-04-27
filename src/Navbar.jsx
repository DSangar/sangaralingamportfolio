import React from 'react'
import Logo from './images/Slogo.png'
import profiler from './Profile1.jsx'
import './style.css'




function Navbar() {

  const mystyle={

    width:"50px",
    height:"40px",
     

  };

  const btnstyle={


    size:"20px",
     

  };

  

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark nav-tabs fixed-top">
      
        
      
    <div className="container-fluid">
    
          <a class="navbar-brand" href="#">
            <img src={Logo} className="rounded-pill" style={mystyle} />
          </a>
      <a className="navbar-brand" href="javascript(0)">Logo</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Profile">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Project">Projects</a>
          </li>
           
          <li className="nav-item">
            <a className="nav-link" href="#Jounery">Jounery</a>
          </li>     
          <li className="nav-item">
            <a className="nav-link" href="#Skills">Skills</a>
          </li>  
          <li className="nav-item">
            <a className="" href="#Contact"><button class="btn btn-outline-info btn-sm" type="button" style={btnstyle}>Contact</button></a>
          </li>   
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar