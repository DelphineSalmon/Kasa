import './card.scss'

function Card({ lodge }) {
    return (
        <div className="card">
            <h3 className="titlecard">{lodge.title}</h3>
            <img
                className="card__imgcard"
                src={lodge.cover}
                alt={lodge.title}
            />
        </div>
    )
}

export default Card
