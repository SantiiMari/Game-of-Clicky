import React from 'react';
//import ReactDOM from 'react-dom';
import "./CharCard.css";



//setup Cahracter components

const CharCard = props => (
    <div className="block-example border border-0 border-dark" onClick={props.imageClick}>
    {/* <div className="img-container"> */}
            <img className="rounded-circle"alt={props.image.replace('.jpg', '')} src={require("../../images/"+ props.image)} roundedCircle/>

        {/* </div> */}
    </div>
);

export default CharCard;
