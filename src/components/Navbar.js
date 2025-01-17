"use client"
import { useState } from 'react'
import Image from 'next/image'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="custom-navbar">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="navbar-brand">
            <Image
              src={require("../assets/logo.png")}
              alt="Logo"
              width={190}
              height={40}
            />
          </div>

          <button 
            className="mobile-menu-btn d-lg-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className={`nav-items ${isMenuOpen ? 'show' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#offer">What We Offer</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#blogs">Blogs</a></li>
          </ul>

          <button className="btn btn-primary-custom d-none d-lg-block">
            Request A Quote
          </button>
        </div>
      </div>
    </nav>
  )
} 