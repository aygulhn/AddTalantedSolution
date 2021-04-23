import React from "react";

type PosterProps = {
    title: string,
    info: string
}

const Poster: React.FC<PosterProps> = ({title, info}) => {

    return (
        <div className="poster">
            <div className="poster__background">
                <img src={require('../assets/images/first-course.png').default}/>
            </div>
            <div className="poster__legend">
                <div>
                    <div className="row justify-content-between align-items-center nopadding">
                        <h3>{title}</h3>
                        <h4>{info}</h4>
                    </div>
                    <p>24 lessons</p>
                </div>
                <div className="action">
                    <button className="empty-btn">
                        <img src={require('../assets/images/icons/Vector.svg').default}/>
                    </button>
                </div>
            </div>
        </div>
    )

}

export default Poster