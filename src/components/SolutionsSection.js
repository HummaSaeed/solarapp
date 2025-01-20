"use client"
import Image from 'next/image'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const SOLUTIONS = [
  {
    number: "01",
    title: "Residential Solar Solutions",
    description: "Power your home with clean, renewable energy. Our residential solar systems are designed to reduce electricity bills, increase property value, and provide energy independence."
  },
  {
    number: "02",
    title: "Commercial Solar Solutions",
    description: "Optimize your business operations with commercial solar systems that lower operational costs and demonstrate your commitment to sustainability."
  },
  {
    number: "03",
    title: "Industrial Solar Solutions",
    description: "Empower your industrial facilities with solar energy to support large-scale operations while cutting energy costs and carbon emissions."
  },
  {
    number: "04",
    title: "Agricultural Solar Solutions",
    description: "Support sustainable farming practices with solar energy systems that power irrigation, machinery, and other agricultural operations efficiently"
  },
  {
    number: "05",
    title: "EV Charging Solutions",
    description: "Accelerate the adoption of electric vehicles with reliable EV charging stations for homes, offices, and public spaces."
  },
  {
    number: "06",
    title: "Indigenous Communities Solutions",
    description: "Empower your industrial facilities with solar energy to support large-scale operations while cutting energy costs and carbon emissions."
  }
]

export default function SolutionsSection() {
  const [expandedIndex, setExpandedIndex] = useState(null)

  return (
    <section className="solutions-section">
      <div className="container">
        {SOLUTIONS.map((solution, index) => (
          <div key={solution.number}>
            <SolutionItem
              {...solution}
              isExpanded={expandedIndex === index}
              onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
            />
            {expandedIndex === index && <ExpandedContent />}
            <div className="divider"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

function SolutionItem({ number, title, description, isExpanded, onToggle }) {
  return (
    <div className="row solution-item">
      <div className="col-1 d-flex justify-content-end align-items-start">
        <span className="number">{number}</span>
      </div>
      <div className="col-3 d-flex justify-content-start">
        <h3 className="solution-title mb-3">{title}</h3>
      </div>
      <div className="col-4 d-flex justify-content-center desc" >
        <p className="solution-description mb-0">{description}</p>
      </div>
      <div className="col-4 d-flex flex-items-end justify-content-end">
        <button
        
          className={`circle-arrow ${isExpanded ? 'expanded' : ''}`}
          onClick={onToggle}
        >
          <FaChevronDown color="#20202099"/>
        </button>
      </div>
    </div>
  )
}

function ExpandedContent() {
  return (
    <div className="expanded-content" style={{marginLeft:70,marginRight:70}}>
      <div className="row">
        <div className="col-lg-8">
          <div className="image-container">
            <Image
              src={require("../assets/expanded-image.png")}
              alt="Expanded View"
              width={800}
              height={450}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <CheckList />
          <p className="proposal-text">
            Custom Grid tie Commercial solar proposals available in 24 hours
          </p>
          <button className="btn btn-primary-custom w-100">
            Request A Quote Today
          </button>
        </div>
      </div>
    </div>
  )
}

function CheckList() {
  const items = [
    'Scalable systems tailored to your business size.',
    'Reduce electricity expenses and increase profitability.',
    'Tax credits and incentives for commercial installations.'
  ]

  return (
    <div className="checklist">
      {items.map((item, index) => (
        <div key={index} className="checklist-card">
          <div className="square-bullet"></div>
          <span style={{color:"#000000CC",fontSize:18,maxWidth:300}}>{item}</span>
        </div>
      ))}
    </div>
  )
} 