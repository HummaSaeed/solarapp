"use client"
import Image from 'next/image'
import { FaArrowRight, FaPhone } from 'react-icons/fa'

export default function IncentivesSection() {
  return (
    <section className="incentives-section">
      <div className="container">
        <div className="text-center mb-5">
          <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
            <Image
              src={require("../assets/small-icon.png")}
              alt="Small Icon"
              width={24}
              height={24}
            />
            <h2 className="section-title">CURRENT SOLAR AND ENERGY</h2>
          </div>
          <h3 className="incentives-subtitle">Incentives in Manitoba</h3>
          
          <div className="incentives-description">
            <p>
              Even though solar panels save money over time, the upfront costs of purchasing and installing a system can be challenging. That's why financial grants are available to make solar power more accessible for Manitobans.
            </p>
            <p>
              Federal and provincial government incentives provide valuable opportunities for homeowners and businesses to transition to solar energy.
            </p>
            <p>
              While these grant programs can change and may be time-sensitive, we've highlighted some current options to help fund your solar installation. To make it easier, we've organized them into federal and provincial programs and specified which incentives apply to residential and commercial projects.
            </p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <IncentiveCard
              type="Residential"
              subtitle="Federal Incentives"
              description="Grants of up to $5,000 for energy-efficient home retrofits, including solar panel installations. Up to $600 to cover the cost of an EnerGuide evaluation."
              eligibility="Homeowners who complete a pre- and post-retrofit evaluation."
              isPrimary
            />
          </div>
          <div className="col-lg-6">
            <IncentiveCard
              type="Commercial"
              subtitle="Provincial Incentives"
              description="Grants of up to $5,000 for energy-efficient business retrofits, including solar panel installations."
              eligibility="Business owners who complete required evaluations."
              isPrimary={false}
            />
          </div>
        </div>

        <div className="help-card mt-5">
          <div className="help-content">
            <p>Confused about which incentive works for you? Our team can help you navigate the options and maximize your savings</p>
            <div className="d-flex gap-3 justify-content-center">
              <button className="btn btn-primary-custom">
                Request for a Quote
              </button>
              <button className="btn btn-secondary-custom d-flex align-items-center gap-2">
                <FaPhone style={{ transform: 'rotate(0deg)' }} /> 
                <span style={{ display: 'inline-block', lineHeight: '1.2' }}>
                  Call Us<br />Now
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function IncentiveCard({ type, subtitle, description, eligibility, isPrimary }) {
  return (
    <div className={`incentive-card ${isPrimary ? 'primary' : 'secondary'}`}>
      <div className="card-header">
        <h3>{type}</h3>
        <div className="circle-icon">
          <FaArrowRight className="rotated-icon" />
        </div>
      </div>
      <div className="card-content">
        <h4>{subtitle}</h4>
        <p>{description}</p>
        <p className="eligibility">
          <span>Eligibility:</span> {eligibility}
        </p>
      </div>
      <div className="divider"></div>
      
      <div className="card-content">
        <h4>{subtitle}</h4>
        <p>{description}</p>
        <p className="eligibility">
          <span>Eligibility:</span> {eligibility}
        </p>
      </div>
    </div>
  )
} 