import './banner.scss'

function BannerTemplate({ title, src, alt }) {
    return (
        <div className="banner">
            <img className="bannerimage" src={src} alt={alt} />
            <h1 className="bannertitle">{title}</h1>
        </div>
    )
}

export default BannerTemplate
