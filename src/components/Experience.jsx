import { experiences } from "../constants/data";

function Experience() {
    return (
        <section className="experience">
            <div className="experience__container bg-gray">
                <h3>The Tiffany Experience</h3>

                <div className="experience-content">
                    {experiences.map((experience) => {
                        return (
                            <div href={experience.link} key={experience.id} className="card">
                                <picture>
                                    <source type="image/webp" media="(max-width: 900px)" srcSet={experience.icon} />
                                    <source media="(max-width: 900px)" srcSet={experience.icon} />
                                    <source type="image/webp" srcSet={experience.icon} />
                                    <img src="" />
                                </picture>
                                <div className="card-infos">
                                    <div className="title">{experience.firstText}</div>
                                    <div className="subtitle">{experience.secondText}</div>
                                    <a href={experience.link} className="hoverEffect">
                                        {experience.textLink}
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

export default Experience;