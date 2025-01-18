"use client"
import Image from 'next/image'

export default function AboutSection() {
    return (
        <section className="about-section">
            <div className="container">
                <div className="row">
                    <LeftSection />
                    <RightSection />
                </div>
            </div>
        </section>
    )
}

function LeftSection() {
    return (
        <div className="col-lg-4">
            <div className="future-text">
                <Image
                    src={require("../assets/small-icon.png")}
                    alt="Small Icon"
                    width={24}
                    height={24}
                />
                <p>
                    <span>CREATING A </span>
                    <span style={{ color: "#1AAC98" }}>GREENER</span>,
                    <br />
                    <span style={{ color: "#1AAC98" }}>SAFER FUTURE </span>
                    FOR ALL OF US.
                </p>
            </div>
            <Image
                src={require("../assets/left-section.png")}
                alt="Left Section"
                width={400}
                height={500}
            />
        </div>
    )
}

function RightSection() {
    return (
        <div className="col-lg-7">
            <div className="right-content">
                <MissionText />
                <div className="divider"></div>
                <InfoSection />
            </div>
        </div>
    )
}

function MissionText() {
    return (
        <p className="mission-text">
            <span className="regular-text">
                We are passionate about the environment and really excited to be a part of Manitoba's transition to a low carbon economy.
            </span>{" "}
            <span className="italic-text">
                As renewable energy advocates we have a combination of products and services targeted towards the electric vehicle and solar community here in the prairies.
            </span>
        </p>
    )
}

function InfoSection() {
    return (
        <div className="info-section">
            <div className="info-image">
                <Image
                    src={require("../assets/info-image.png")}
                    alt="Info Section"
                    // width={300}
                    // height={200}
                />
            </div>
            <div className="info-content">
                <p className="info-text">
                    We continue to strive and adapt to promote positive sustainable solutions to meet energy demands.
                </p>
                <button className="btn btn-primary-custom">
                    Learn More
                </button>
            </div>
        </div>
    )
} 