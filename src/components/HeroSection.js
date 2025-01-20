"use client"
import Image from 'next/image'
import { FaPhone } from 'react-icons/fa'
import Navbar from './Navbar'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <Navbar />
        <div className="container">
          <div className="hero-content">
            <div className="solar-solutions">
              SOLAR SOLUTIONS
            </div>
            
            <div className="row">
              <LeftContent />
              <RightContent />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LeftContent() {
  return (
    <div className="col-lg-6">
      <CompanyTag />
      <TitleSection />
      <Description />
      <HeroButtons />
    </div>
  )
}

function RightContent() {
  return (
    <div className="col-lg-6">
      <div className="d-flex flex-column align-items-end">
        <StatsCards />
        <HeroImage />
      </div>
    </div>
  )
}

function CompanyTag() {
  return (
    <div className="company-tag">
      <Image
        src={require("../assets/logo.png")}
        alt="Logo"
        width={40}
        height={40}
      />
      <span>Manitoba's solar energy company</span>
    </div>
  )
}

function TitleSection() {
  return (
    <div className="title-section">
      <div className="d-flex align-items-center gap-3">
        <h1 className="for-us">FOR US.</h1>
        <h1 className="for-them">FOR THEM.</h1>
      </div>
      <h1 className="for-future">FOR THE FUTURE</h1>
    </div>
  )
}

function Description() {
  return (
    <p className="description">
      Manitoba'a leader in Solar Panel supply and installation. We design, setup, deliver,
      and install solar pane systems locally in Winnipeg. We offer efficient and advanced
      solar panel solutions for all home, farm, business, and commercial properties.
    </p>
  )
}

function HeroButtons() {
  return (
    <div className="hero-buttons">
      <button className="btn btn-primary-custom">
        Get A Quote &gt;
      </button>
      <button className="btn btn-secondary-custom d-flex align-items-center gap-2 justify-content-center">
      
       Call Us Now
      </button>
    </div>
  )
}

function StatsCards() {
  return (
    <div className="stats-cards">
      <div className="stat-card">
        <h2 className="stat-number">70%</h2>
        <p>Save upto 70% in Your Electricity Bill</p>
      </div>
      <div className="stat-card">
        <h2 className="stat-number">1000</h2>
        <p>Over 1000 installations Completed</p>
      </div>
    </div>
  )
}

function HeroImage() {
  return (
    <div className="hero-image">
      <Image
        src={require("../assets/hero-button.png")}
        alt="Solar Panel Installation"
        width={400}
        height={100}
        priority
        quality={100}
      />
    </div>
  )
} 