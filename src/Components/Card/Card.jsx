import { Link } from 'react-router-dom'
import './card.scss'

function Card({ lodge }) {
    return (
        <div className="card">
            <Link className="cardlink" to={`/lodging/${lodge.id}`}>
                <h3 className="titlecard">{lodge.title}</h3>
                <img
                    className="card__imgcard"
                    src={lodge.cover}
                    alt={lodge.title}
                />
            </Link>
        </div>
    )
}

export default Card
