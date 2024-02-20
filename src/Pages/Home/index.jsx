import './home.scss'
import Banner from './Banner'
import Cards from './Cards'

function Home() {
    return (
        <div>
            <Banner />
            <div className="containercards">
                <Cards />
            </div>
        </div>
    )
}

export default Home
