function Card({ lodge }) {
    return (
        <div>
            {lodge.title}
            <img src={lodge.cover} alt={lodge.title} />
        </div>
    )
}

export default Card
