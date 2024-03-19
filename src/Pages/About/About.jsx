import aboutList from '../../Datas/aboutList.json'
import Displayer from '../../Components/Displayer/Displayer'
import Mountain from './Images/Mountain.png'
import BannerTemplate from '../../Components/Banner/Banner'
import './about.scss'

function Abouts() {
    return (
        <div>
            <BannerTemplate src={Mountain} alt={'Photographie de montagne'} />
            <div className="containerabout">
                {' '}
                {aboutList.map((about, index) => {
                    return (
                        <Displayer
                            key={index}
                            title={about.title}
                            description={about.description}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Abouts
