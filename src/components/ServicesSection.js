"use client"
import ServiceCard from './ServiceCard'
import { SERVICES } from '@/constants'

export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="container">
        <SectionTitle />
        <SectionDescription />
        <ServiceCards />
      </div>
    </section>
  )
}

function SectionTitle() {
  return (
    <h2 className="services-title">
      Powering homes, businesses, farms<br />
      and more with <span className="highlight">solar in Manitoba</span>
    </h2>
  )
}

function SectionDescription() {
  return (
    <p className="services-description">
      At Vibes Energy Solar, we provide cutting-edge renewable energy solutions tailored to your needs.
      From powering your home or business with solar systems to installing reliable EV chargers, our
      products are designed to promote energy efficiency, reduce costs, and contribute to a sustainable
      future. Explore our offerings to find the perfect energy solution for you.
    </p>
  )
}

function ServiceCards() {
  return (
    <div className="row g-4" style={{marginLeft:30, marginRight:30}}>
      {SERVICES.map((service, index) => (
        <div key={service.title} className="col-lg-4">
          <ServiceCard {...service} imageFirst={index !== 1} />
        </div>
      ))}
    </div>
  )
} 