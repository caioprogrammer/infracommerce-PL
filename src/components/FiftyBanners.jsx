import { fiftyContent } from "../constants/data";

function FiftyBanners() {
    return (
        <section className="fifty">
            <div className="fifty__content">
                {fiftyContent.map((item) => {
                    return (
                        <div className="item" key={item.id}>
                            <picture>
                                <source type="image/webp" media="(max-width: 900px)" srcSet={item.image} />
                                <source type="image/webp" srcSet={item.image} />
                                <source media="(max-width: 900px)" srcSet={item.image} />
                                <img src={item.image} />
                            </picture>
                            <h3 className="title">
                                {item.title}
                            </h3>
                            <a className="hoverEffect" href={item.link}>
                                {item.buttonText}
                            <i className="fa-solid fa-chevron-right"></i>
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default FiftyBanners;