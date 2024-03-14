import './card.scss'

function Card({ lodge }) {
    return (
        <div className="card">
            <a className="cardlink" href={`/lodging/${lodge.id}`}>
                <h3 className="titlecard">{lodge.title}</h3>
                <img
                    className="card__imgcard"
                    src={lodge.cover}
                    alt={lodge.title}
                />
            </a>
        </div>
    )
}

export default Card
