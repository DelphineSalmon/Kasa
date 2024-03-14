import { Link } from 'react-router-dom'
import './error.scss'

function Error() {
    return (
        <div className="errorpage">
            <h1 className="titleerror">404</h1>
            <h2 className="messageerror">
                <span className="nowrap">Oups ! La page que</span>
                <span className="nowrap"> vous demandez n'existe pas.</span>
            </h2>
            <Link className="linkaccueil" to="/">
                Retourner sur la page d'accueil
            </Link>
        </div>
    )
}

export default Error
