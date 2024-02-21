import './home.scss'
import BannerTemplate from '../../Components/Banner/banner'
import Cliff from './Images/Cliff.png'
import Cards from './Cards'

function Home() {
    return (
        <div>
            <BannerTemplate
                src={Cliff}
                alt={'Photographie de falaise'}
                title={'Chez vous, partout et ailleurs'}
            />
            <div className="containercards">
                <Cards />
            </div>
        </div>
    )
}

export default Home
