import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import './header.scss'

function Header() {
    return (
        <div className="navbar">
            <img className="navlogo" src={Logo} alt="Logo Kaza" />
            <div className="navbarlink">
                <Link className="navbar__link" to="/">
                    Accueil
                </Link>
                <Link className="navbar__link" to="/about">
                    A propos
                </Link>
            </div>
        </div>
    )
}

export default Header
