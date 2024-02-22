import { useParams } from 'react-router-dom'
import { getLodgeList } from '../../Datas/lodgeList'
import Displayer from '../../Components/Displayer/displayer'

function Lodging() {
    const { id } = useParams()
    const lodge = getLodgeList().filter((value) => value.id === id)[0]
    const equipments = lodge.equipments.map((equip) => <div>{equip}</div>)
    return (
        <div>
            <h2>{lodge.title}</h2>
            <p>{lodge.location}</p>
            <div>
                <Displayer
                    title="Description"
                    description={lodge.description}
                />
                <Displayer title="Equipements" description={equipments} />
            </div>
        </div>
    )
}

export default Lodging
