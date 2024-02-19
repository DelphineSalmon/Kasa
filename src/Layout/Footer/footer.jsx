import LogoFooter from '../../assets/LogoFooter.png'
import './footer.scss'

function Footer() {
    return (
        <div className="footer">
            <img className="footerlogo" src={LogoFooter} alt="Logo Footer" />
            <p>© 2024 Kasa. All rightd reserved</p>
        </div>
    )
}

export default Footer
