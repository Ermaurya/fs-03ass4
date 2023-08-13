// import { BsShare } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faMessage, faShareNodes } from '@fortawesome/free-solid-svg-icons'
const Card = (props) => {
    return (
        <>
            {/* <div className="movie_card bright"> */}
                <div className="info_section">
                    <div className="movie_header">
                        <div className='text_area'>
                          <div className='users'>
                            <img className='dp_img' alt="" src={props.image} />
                            <span className='user_text'>{props.name}</span>
                          </div>
                        <h1>{props.name}</h1>
                        <h4>{props.subtitle}</h4>
                       
                        <p>{props.rating}</p>
                        <div className="movie_desc">
                        <p className="text">
                            {props.description}
                        </p>
                        <span className="minutes">{props.time}</span>
                        <p className="type">{props.m_type}</p>
                        
                    </div>
                        </div>
                        <div className='img_field'>

                        <img className="locandina" alt="" src={props.image} />
                        </div>
                    </div>
                   
                    
                </div>
                {/* <div className="blur_back bright_back">
                    <img src={props.background} alt=''/>
                </div> */}
            {/* </div> */}
            
        </>
    )
}
export default Card;