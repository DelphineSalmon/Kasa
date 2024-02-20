import Card from '../../Components/Cards'
import { getLodgeList } from '../../Datas/lodgeList'
import './cards.scss'

function Cards() {
    return (
        <div className="cards">
            {getLodgeList().map((lodge) => (
                <Card lodge={lodge} />
            ))}
        </div>
    )
}
export default Cards
