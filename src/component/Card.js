// import { BsShare } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faMessage, faShareNodes } from '@fortawesome/free-solid-svg-icons'
const Card = (props) => {
    return (
        <>
            <div className="movie_card bright">
                <div className="info_section">
                    <div className="movie_header">
                        <img className="locandina" alt="" src={props.image} />
                        <h1>{props.name}</h1>
                        <h4>{props.subtitle}</h4>
                        <span className="minutes">{props.time}</span>
                        <p className="type">{props.m_type}</p>
                        <p>{props.rating}</p>
                    </div>
                    <div className="movie_desc">
                        <p className="text">
                            {props.description}
                        </p>
                    </div>
                    <div className="movie_social ">
                        <ul>
                            <li><i className="material-icons"><FontAwesomeIcon icon={faShareNodes}/></i></li>
                            <li><i className="material-icons"><FontAwesomeIcon icon={faHeart}/></i></li>
                            <li><i className="material-icons"><FontAwesomeIcon icon={faMessage}/></i></li>
                        </ul>
                    </div>
                </div>
                <div className="blur_back bright_back">
                    <img src={props.background} alt=''/>
                </div>
            </div>
        </>
    )
}
export default Card;