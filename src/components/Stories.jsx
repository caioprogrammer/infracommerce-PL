import { stories } from "../constants/data";
function Stories() {
    return (
        <section className="bg-gray stories">
            <h3 className="title">Stories</h3>
            <div className="stories__content">
                <div className="tile">
                {stories.map((story) => {
                    return (
                        <div className="card" key={story.id}>
                            {story.image != "" && 
                                <picture>
                                    <source type="image/webp" srcSet={story.image} />
                                    <img src={story.image} alt={story.title} />
                                </picture>
                            }
                            <div className="card-infos">
                                <h3 className="title">{story.title}</h3>
                                <h4 className="subtitle">{story.subtitle}</h4>
                                <a className="hoverEffect" href={story.link}>
                                    {story.btnText}
                                    <i className="fa-solid fa-chevron-right"></i>
                                </a>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        </section>
    )
}

export default Stories;