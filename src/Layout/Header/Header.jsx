import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import './header.scss'

function Header() {
    const location = useLocation()
    return (
        <div className="navbar">
            <img className="navlogo" src={Logo} alt="Logo Kaza" />
            <div className="navbarlink">
                <Link
                    className={
                        location.pathname === '/'
                            ? 'navbar__link selected'
                            : 'navbar__link'
                    }
                    to="/"
                >
                    Accueil
                </Link>
                <Link
                    className={
                        location.pathname === '/about'
                            ? 'navbar__link selected'
                            : 'navbar__link'
                    }
                    to="/about"
                >
                    A propos
                </Link>
            </div>
        </div>
    )
}

export default Header
