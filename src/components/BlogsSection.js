"use client"
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

const BLOG_CATEGORIES = [
  'Grid tie', 'Solar Energy', 'Off Grid', 'Sustainability', 
  'Cost Savings', 'Technological Advancements', 'Case Study'
]

const BLOG_POSTS = [
  {
    image: require('../assets/blog1.png'),
    date: 'August 30, 2024',
    title: '5 Surprising Benefits Of Solar Energy Systems',
    content: 'Lorem ipsum dolor sit amet consectetur. Nibh auctor id nunc hendrerit neque dui habitant dignissim habitant. Ullamcorper nisl non a dolor.'
  },
  {
    image: require('../assets/blog2.png'),
    date: 'August 30, 2024',
    title: '5 Surprising Benefits Of Solar Energy Systems',
    content: 'Lorem ipsum dolor sit amet consectetur. Nibh auctor id nunc hendrerit neque dui habitant dignissim habitant. Ullamcorper nisl non a dolor.'
  },
  {
    image: require('../assets/blog3.png'),
    date: 'August 30, 2024',
    title: '5 Surprising Benefits Of Solar Energy Systems',
    content: 'Lorem ipsum dolor sit amet consectetur. Nibh auctor id nunc hendrerit neque dui habitant dignissim habitant. Ullamcorper nisl non a dolor.'
  }
]

export default function BlogsSection() {
  return (
    <section className="blogs-section">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="blogs-title">BLOGS AND ARTICLES</h2>
          <div className='d-flex'>
          <button className="view-more-btn mr-5">
            View More
            
          </button>
          <div className="circle-arrow-secondary">
              <FaArrowRight style={{ transform: 'rotate(-45deg)' }} />
            </div>
            </div>
        </div>

        <div className="blog-categories mb-4">
          {BLOG_CATEGORIES.map((category, index) => (
            <button 
              key={category} 
              className={`category-btn ${index === 0 ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {BLOG_POSTS.map((post, index) => (
            <div key={index} className="col-lg-4">
              <BlogCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BlogCard({ image, date, title, content }) {
  return (
    <div className="blog-card">
      <div className="blog-image">
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="blog-content">
        <p className="blog-date">{date}</p>
        <h3 className="blog-title">{title}</h3>
        <p className="blog-excerpt">{content}</p>
        <button className="btn btn-primary-custom">Read More</button>
      </div>
    </div>
  )
} 