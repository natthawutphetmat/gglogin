 "use client"


import React,{useEffect, useState} from 'react'
import Link from 'next/link'

export default function NavBar() {
   
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
       
        
    })






  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
        <a className="navbar-brand" href="#page-top"><img src="/img/logo.png" alt="logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars ms-1"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li className="nav-item"><Link className="nav-link" href="#services">Services</Link></li>
                <li className="nav-item"><Link className="nav-link" href="#portfolio">Portfolio</Link></li>
                <li className="nav-item"><Link className="nav-link" href="#about">About</Link></li>
                
                <li className="nav-item"><Link className="btn btn-outline-success" href="/login">Login</Link></li>
                <li className="nav-item"><Link className="btn btn-outline-primary" href="/register">Register</Link></li>
            </ul>
        </div>
    </div>
</nav>


  )
}
