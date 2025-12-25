import './Cards.scss'
import Card from "../Card/Card"

function Cards({ cards }) {
  const middleCards = cards.filter(card => card.position === "middle")
  const sideCards = cards.filter(card => card.position !== "middle")

  return (
    <div className="cards">
      {/* Left card */}
      <Card {...sideCards[0]} className={sideCards[0].color} />

      {/* Middle cards */}
      <div className="middle-cards">
        {middleCards.map(card => (
          <Card
            key={card.id}
            {...card}
            className={card.color}
          />
        ))}
      </div>

      {/* Right card */}
      <Card {...sideCards[1]} className={sideCards[1].color} />
    </div>
  )
}

export default Cards
