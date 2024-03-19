import { useParams } from 'react-router-dom'
import lodgeList from '../../Datas/lodgeList.json'
import Displayer from '../../Components/Displayer/Displayer'
import Star from '../../Components/Rating/Star'
import Slider from '../../Components/Slider/Slider'
import './lodging.scss'
import Error from '../Error/Error'

function Lodging() {
    const { id } = useParams()
    const lodges = lodgeList.filter((value) => value.id === id)
    if (lodges.length === 0) {
        return <Error />
    }
    const lodge = lodges[0]

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
                <Displayer title="Equipements" description={lodge.equipments} />
            </div>
        </div>
    )
}

export default Lodging
