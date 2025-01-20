"use client"
import { useState } from 'react'
import Image from 'next/image'
import { FaBars, FaTimes, FaFileAlt } from 'react-icons/fa'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="custom-navbar">
      <div className="container">
        <div className="navbar-content">
          {/* Mobile Toggle Button */}
          <button 
            className="menu-toggle d-lg-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars size={24} color={"black"}/>
          </button>

          {/* Logo */}
          <div className="logo">
            <Image
              src={require("../assets/logo.png")}
              alt="Logo"
              width={190}
              height={40}
            />
          </div>

          {/* Desktop Nav Items */}
          <ul className="nav-items d-none d-lg-flex">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#offer">What We Offer</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#blogs">Blogs</a></li>
          </ul>

          {/* Desktop Quote Button */}
          <button className="btn btn-primary-custom d-none d-lg-block">
            Request A Quote
          </button>

          {/* Mobile Quote Button */}
          <button className="mobile-quote-btn d-lg-none">
          <Image
              src={require("../assets/nav-icon.png")}
              alt="Logo"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </nav>
  )
} 