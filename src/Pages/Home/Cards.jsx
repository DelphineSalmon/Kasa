import Card from '../../Components/Cards'
import { getLodgeList } from '../../Datas/lodgeList'

function Cards() {
    return (
        <>
            {getLodgeList().map((lodge) => (
                <Card lodge={lodge} />
            ))}
        </>
    )
}
export default Cards
