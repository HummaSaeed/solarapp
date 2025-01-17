import Image from 'next/image'

export default function ServiceCard({ image, title, price, imageFirst = true }) {
  const cardContent = [
    <div key="content" className="card-content">
      <h3>{title}</h3>
      <p className="price">{price}</p>
    </div>,
    <div key="image" className="card-image">
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  ]

  return (
    <div className="service-card">
      {imageFirst ? cardContent : cardContent.reverse()}
    </div>
  )
} 