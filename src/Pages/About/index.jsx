import { getAboutList } from '../../Datas/aboutList'
import Displayer from '../../Components/Displayer/displayer'
import Mountain from './Images/Mountain.png'
import BannerTemplate from '../../Components/Banner/banner'
import './about.scss'

function Abouts() {
    return (
        <div>
            <BannerTemplate src={Mountain} alt={'Photographie de montagne'} />
            <div className="containerabout">
                {' '}
                {getAboutList().map((about) => {
                    return <Displayer about={about} />
                })}
            </div>
        </div>
    )
}

export default Abouts
