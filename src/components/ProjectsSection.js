"use client"
import Image from 'next/image'
import { useState } from 'react'

const PROJECT_CATEGORIES = [
  'Newest', 'Residential', 'Commercial', 'Industrial', 
  'Agricultural', 'OFF-Grid', 'Grid-Tied', 'EV Charging',
  'Rooftop Installations'
]

const PROJECTS = [
  {
    image: require('../assets/project1.png'),
    title: 'Residential Solar Installation',
    location: 'Local projects in Manitoba'
  },
  {
    image: require('../assets/project2.png'),
    title: 'Commercial Solar Project',
    location: 'Local projects in Manitoba'
  },
  {
    image: require('../assets/project3.png'),
    title: 'Agricultural Solar Setup',
    location: 'Local projects in Manitoba'
  },
  {
    image: require('../assets/project4.png'),
    title: 'Industrial Solar Installation',
    location: 'Local projects in Manitoba'
  },
  {
    image: require('../assets/project5.png'),
    title: 'EV Charging Station',
    location: 'Local projects in Manitoba'
  },
  {
    image: require('../assets/project6.png'),
    title: 'Rooftop Solar Panels',
    location: 'Local projects in Manitoba'
  },
  {
    image: require('../assets/project7.png'),
    title: 'Grid-Tied Solar System',
    location: 'Local projects in Manitoba'
  },
  {
    image: require('../assets/project8.png'),
    title: 'Off-Grid Solar Installation',
    location: 'Local projects in Manitoba'
  }
]

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('Newest')

  return (
    <section className="projects-section">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <h2 className="projects-title">SEE OUR WORK IN ACTION</h2>
            <button className="btn btn-secondary-custom">View All Projects</button>
          </div>
          <div className="col-lg-6">
            <p className="projects-description">
              Explore some of our completed solar and EV charger installations across Manitoba 
              for homes, businesses, and farms. We take pride in delivering reliable energy 
              solutions tailored to every need.
            </p>
          </div>
        </div>

        <div className="projects-nav">
          {PROJECT_CATEGORIES.map(category => (
            <button
              key={category}
              className={`nav-item ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mb-5">
          <h3 className="stats-heading">
            Over <strong>1,000 installations completed in Manitoba</strong>, generating 5 MW of clean 
            energy and saving our customers millions in energy costs.
          </h3>
        </div>

        <div className="d-flex justify-content-center gap-4">
          <button className="btn btn-primary-custom">Request A Quote</button>
          <button className="btn btn-secondary-custom">Call Us Now</button>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ image, title, location }) {
  return (
    <div className="project-card">
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        style={{ width: '100%', height: 'auto' }}
      />
      <div className="project-overlay">
        <h4>{title}</h4>
        <p>{location}</p>
      </div>
    </div>
  )
} 