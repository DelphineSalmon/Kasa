import LogoFooter from '../../assets/LogoFooter.png'
import './footer.scss'

function Footer() {
    return (
        <div className="footer">
            <img className="footerlogo" src={LogoFooter} alt="Logo Footer" />
            <p>
                <span className="nowrap">© 2024 Kasa. All</span>
                <span className="nowrap">rights reserved</span>
            </p>
        </div>
    )
}

export default Footer
