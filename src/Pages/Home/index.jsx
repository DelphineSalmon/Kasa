import './home.scss'
import BannerTemplate from '../../Components/Banner/banner'
import Cliff from './Images/Cliff.png'
import Card from '../../Components/Cards'
import { getLodgeList } from '../../Datas/lodgeList'

function Home() {
    return (
        <div>
            <BannerTemplate
                src={Cliff}
                alt={'Photographie de falaise'}
                title={'Chez vous, partout et ailleurs'}
            />
            <div className="containercards">
                <div className="cards">
                    {getLodgeList().map((lodge) => (
                        <Card key={lodge.id} lodge={lodge} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
