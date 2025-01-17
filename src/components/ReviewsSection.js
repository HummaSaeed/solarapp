"use client"
import { FaStar } from 'react-icons/fa'

const REVIEWS = [
  {
    rating: 5,
    text: "Most people install solar once. When done right they can last a very long time. Imran and his team will use the best components, installed to perfection. I got lucky by having Imran be my solar installer. You don’t have to take a chance. Choose Vibes Energy and put your mind at ease. This system will be helping to save the planet for a very long time, thanks to the superior team that put it all together. Thanks Imran",
    author: "— Richard B, Winnipeg"
  },
  {
    rating: 5,
    text: "Well hard to believe it has been a year since our solar went live Total system production for year 1 is 40 312 Kwhrs, 29467 sold to MB hydro and 15 965 Kwhrs bought from Mb Hydro This includes charging 2 electric cars (chevy bolts) since August 2021 So all around I am a pretty happy camper.",
    author: "— James G, Winnipeg"
  },
  {
    rating: 5,
    text: "We are so glad Imran has started his own company. He is very good at what he does, professional, easy to talk to and very good with communication. He takes pride in his work and it shows. We will continue to use Vibes Energy for any and all of our solar needs.",
    author: "— Tall Pines Lodge, Winnipeg"
  },
  {
    rating: 5,
    text: "Vibes Energy Solar is a true Manitoba gem – a family-owned and operated business with fantastic people, exceptional customer service, and top-notch quality. If you’re even slightly curious about adding solar power to your energy mix, reach out to them. They’re knowledgeable, approachable, and genuinely committed to helping you make informed choices. Highly recommend!",
    author: "— Richard B, Winnipeg"
  },
  {
    rating: 5,
    text: "Very glad I went with Vibes for my solar project. From start to finish the team was great to deal with, answering all questions I may have had along the way. Clearly taking pride in their work which is a refreshing change these days. 100% recommend you talk with Imran for your solar project!",
    author: "— James G, Winnipeg"
  },
  {
    rating: 5,
    text: "Imran is great to work with. He was there for the complete install of our system and went out of his way to get things inspected and passed. Imran is very knowledgeable about solar system installations and maintenance. He takes the time to answer questions and explain all of the steps. He always responds promptly. We know we’re in good hands for any future questions we may have about the maintenance of our solar equipment. Choosing solar is a big investment and we highly recommend Vibes Energy for your solar installation and maintenance.",
    author: "— Tall Pines Lodge, Winnipeg"
  }
]

export default function ReviewsSection() {
  return (
    <section className="reviews-section">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="reviews-title">WHAT CUSTOMERS ARE SAYING</h2>
          <button className="btn btn-secondary-custom">Read all Reviews</button>
        </div>
        
        <div className="reviews-container">
          {REVIEWS.map((review, index) => (
            <ReviewCard 
              key={index} 
              {...review} 
              isLast={index === REVIEWS.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ReviewCard({ rating, text, author, isLast }) {
  return (
    <div className={`review-card ${isLast ? 'has-shadow' : ''}`}>
      <div className="stars">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="star-icon" />
        ))}
      </div>
      <p className="review-text">{text}</p>
      <p className="reviewer-name">{author}</p>
    </div>
  )
} 