import './home.scss'
import BannerTemplate from '../../Components/Banner/Banner'
import Cliff from './Images/Cliff.png'
import Card from '../../Components/Card/Card'
import lodgeList from '../../Datas/lodgeList.json'

function Home() {
    const title = (
        <>
            <span className="nowrap">Chez vous,</span>
            <span className="nowrap"> partout et ailleurs</span>
        </>
    )
    return (
        <>
            <BannerTemplate
                src={Cliff}
                alt={'Photographie de falaise'}
                title={title}
            />
            <div className="containercards">
                <div className="cards">
                    {lodgeList.map((lodge) => (
                        <Card key={lodge.id} lodge={lodge} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home
