"use client"
import Image from 'next/image'

export default function InfoSection() {
  return (
    <section className="info-columns-section">
      <div className="container">
        <div className="row justify-content-center">
          <LeftColumn />
          <CenterColumn />
          <RightColumn />
        </div>
      </div>
    </section>
  )
}

function LeftColumn() {
  return (
    <div className="col-lg-4">
      <div className="info-column  justify-content-between">
        
        <h2 className="main-title">SUPPLYING AND INSTALLING A WIDE RANGE OF SOLAR SOLUTIONS</h2>
        <div style={{display:"flex",justifyContent:"flex-start",flexDirection:"column"}}>
        <h3 className="subtitle">What Work We Do in Manitoba</h3>
        <p className="info-description">
        
          Tailored solar energy solutions to meet diverse energy needs across different sectors.
          Whether it's your home, business, or farm, we have you covered with reliable and efficient
          systems designed to maximize energy savings and sustainability.
        </p>
        </div>
        
      </div>
    </div>
  )
}

function CenterColumn() {
  return (
    <div className="col-lg-4">
      <div className="center-column">
        <div className="main-image">
          <Image
            src={require("../assets/center-image.png")}
            alt="Solar Solutions"
            width={400}
            height={500}
          />
        </div>
      </div>
    </div>
  )
}

function RightColumn() {
  return (
    <div className="col-lg-4">
      <div className="features-column">
        <FeatureItem
          icon={require("../assets/feature-icon.png")}
          title="Customized Solutions"
          description="Every project is tailored to meet your specific energy needs, ensuring maximum efficiency and performance."
        />
        <div className="divider"></div>
        <FeatureItem
          icon={require("../assets/endtoend.png")}
          title="End-to-End Support"
          description="Every project is tailored to meet your specific energy needs, ensuring maximum efficiency and performance."
        />
      </div>
    </div>
  )
}

function FeatureItem({ icon, title, description }) {
  return (
    <div className="feature-item">
      <div className="icon-circle">
        <Image
          src={icon}
          alt={title}
          width={30}
          height={30}
        />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
} 