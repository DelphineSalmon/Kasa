import Cliff from './Images/Cliff.png'
import './banner.scss'

function Banner() {
    return (
        <div className="banner">
            <img
                className="bannerimage"
                src={Cliff}
                alt="Photographie de falaise"
            />
            <h1 className="bannertitle">Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner
