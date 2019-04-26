import React from 'react';
//import ReactDOM from 'react-dom';
import "./CharCard.css";
import Image from 'react-bootstrap/Image';


//setup Cahracter components

const CharCard = props => (
    <div className="card" onClick={props.imageClick}>
        <div className="img-container">
            <Image alt={props.image.replace('.jpeg', '')} src={require("../../images/"+ props.image)} roundedCircle/>

        </div>
    </div>
);

export default CharCard;
