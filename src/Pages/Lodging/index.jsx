import { useParams } from 'react-router-dom'
import { getLodgeList } from '../../Datas/lodgeList'
import Displayer from '../../Components/Displayer/displayer'
import Star from '../../Components/Rating/star'
import Slider from '../../Components/Slider/slider'
import './lodging.scss'

function Lodging() {
    const { id } = useParams()
    const lodge = getLodgeList().filter((value) => value.id === id)[0]
    const equipments = lodge.equipments.map((equip, index) => (
        <li className="listequipment" key={index}>
            {equip}
        </li>
    ))
    return (
        <div>
            <Slider pictures={lodge.pictures} />
            <div className="lodging">
                <div className="firstcontainer">
                    <div className="containertitlelocation">
                        <h2 className="titlelodge">{lodge.title}</h2>
                        <p className="location">{lodge.location}</p>
                        <div className="tags">
                            {lodge.tags.map((value, index) => (
                                <div key={index} className="tagsvalue">
                                    {value}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="containerstarprofil">
                    <div className="containerprofil">
                        <p className="profilname">{lodge.host.name}</p>
                        <img
                            className="profilpicture"
                            src={lodge.host.picture}
                            alt={lodge.host.name}
                        />
                    </div>

                    <Star className="star" rating={lodge.rating} />
                </div>
            </div>

            <div className="displayerlodge">
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
