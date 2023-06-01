import { useEffect } from "react";

function VideoPlayer(props) {
    return (
        <div className="videoPlayer">
            <div className={`videoPlayer__container ${props.customClass}`}>
                <div className="video">
                    <video width="100%" className="only-desktop" height="100%" autoPlay={true} muted={true} loop={true} preload="auto" src={props.video} ></video>
                    <video width="100%" className="only-mobile" height="100%" autoPlay={true} muted={true} loop={true} preload="auto" src={props.videoMobile} ></video>
                </div>
                <div className="videoPlayer__content">
                    <h3 className="title">{props.title}</h3>
                    <h4 className="subtitle">{props.subtitle}</h4>
                    <span>
                        <a className="hoverEffect" href={props.link} >
                            {props.buttonText}
                            <i className="fa-solid fa-chevron-right"></i>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default VideoPlayer;