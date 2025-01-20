import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

export default function ServiceCard({ image, title, price, imageFirst = true }) {
  const imageContent = (
    <div className="card-image">
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  )

  const textContent = (
    <div className="card-content">
      {!imageFirst ? (
        <>
          <div className="middle-card-header">
            <h3 className="card-title">{title}</h3>
            <button className="circle-button">
              <FaArrowRight className="arrow-icon" />
            </button>
          </div>
          <p className="price">{price}</p>
        </>
      ) : (
        <>
          <h3 className="card-title">{title}</h3>
          <p className="price">{price}</p>
          <button className="circle-button bottom-button">
            <FaArrowRight className="arrow-icon" />
          </button>
        </>
      )}
    </div>
  )

  return (
    <div className="service-card">
      {imageFirst ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {imageContent}
        </>
      )}
    </div>
  )
} 