function FullSectionBanner(props) {
    return (
        <section className="fullBanner">
            <div className="fullBanner__item">
                <a href={props.bannerLink}>
                    <picture>
                        <source type="image/webp" media="(max-width: 900px)" srcSet={props.mobileBanner} />
                        <source media="(max-width: 900px)" srcSet={props.mobileBanner} />
                        <source type="image/webp" srcSet={props.desktopBanner} />
                        <img  loading='lazy' src={props.desktopBanner} alt={props.bannerTitle} />
                    </picture>
                </a>
            </div>
            <div className={`fullBanner__text ${props.position}`}>
                <div className="content">
                    <div className="title">
                        {props.bannerTitle}
                    </div>
                    <div className="subtitle">
                        {props.bannerSubtitle}
                    </div>
                    <a href={props.bannerLink} className="hoverEffect">
                        {props.btnText}
                        <i className="fa-solid fa-chevron-right"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default FullSectionBanner;