import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './star.scss'

function Star({ rating }) {
    const rate = Number(rating)
    const notes = Array(5)
        .fill(null)
        .map((_, index) => (
            <FontAwesomeIcon
                key={index}
                className={index < rate ? 'starred' : 'stargrey'}
                icon={faStar}
            />
        ))
    return <div>{notes}</div>
}
export default Star
