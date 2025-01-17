"use client"
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

const QUICK_LINKS = [
  'Home', 'About Us', 'What We Offer', 'Projects', 'Blogs'
]

const SERVICES = [
  'Residential Solar', 'Commercial Solar', 'Industrial Solar', 'Agricultural Solar', 'EV Charging'
]

const RESOURCES = [
  'Solar Calculator', 'FAQs', 'Blog', 'Case Studies', 'Contact'
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="row">
            <div className="col-lg-5 footer-left">
              <div className="footer-logo mb-4">
                <Image
                  src={require("../assets/logo.png")}
                  alt="Logo"
                  width={300}
                  height={100}
                />
              </div>
              <p className="footer-description">
                Vibes Energy Solar is Manitoba's certified solar experts. Find out your potential savings with Solar Power Solutions for all home and commercial properties with Vibes. We are Manitoba's solar power solutions provider for all home & business sizes. We offer efficient and advanced solutions for energy requirements for yesterday, today, and tomorrow. Servicing all of Manitoba & beyond!
              </p>
              <div className="divider my-4"></div>
              <div className="contact-info">
                <p><span>Address:</span>140 Bessboro St, Winnipeg, MB R3P 2K9, Canada</p>
                <p><span>Phone:</span>204-298-7247</p>
                <p><span>Email:</span>info@vibesenergysolar.com</p>
              </div>
            </div>

            <div className="col-lg-7 footer-right">
              <div className="newsletter mb-5">
                <div className="input-group">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Enter Your Email"
                  />
                  {/* <button className="btn btn-secondary-custom circle">
                    <FaArrowRight />
                  </button> */}
                </div>
              </div>

              <div className="row footer-links">
                <div className="col-md-4">
                  <h4>Quick Links</h4>
                  <ul>
                    {QUICK_LINKS.map(link => (
                      <li key={link}><a href="#">{link}</a></li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-4">
                  <h4 >Services</h4>
                  <ul>
                    {SERVICES.map(service => (
                      <li key={service}><a href="#">{service}</a></li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-4">
                  <h4>Resources</h4>
                  <ul>
                    {RESOURCES.map(resource => (
                      <li key={resource}><a href="#">{resource}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom text-center">
          <p className="treaty-text">
            Vibes Energy is based on Treaty 1 land, and the homeland of the Métis Nation. We practice our trade on Treaty 1,2,3,4, and 5 land, traditional territory of the Anishinaabeg, Cree, Oji-Cree, Dakota, and Dene Peoples, and on the homeland of the Métis Nation.
          </p>
          <p className="copyright">
            Copyright © 2025 Vibes Energy Inc. All rights reserved.
          </p>
          <p className="credits">
            Designed & Built by Jagassar Group
          </p>
        </div>
      </div>
    </footer>
  )
} 