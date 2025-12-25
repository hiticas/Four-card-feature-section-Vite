import './Card.scss'

function Card({ title, subtitle, icon, className = "" }) {
  return (
    <div className={`card ${className}`}>
      <h3 className="card-title">{title}</h3>
      <p className="card-subtitle">{subtitle}</p>
      <img src={icon} alt={title} className="card-icon" />
    </div>
  )
}

export default Card
