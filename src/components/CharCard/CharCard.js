import React from 'react';
import ReactDOM from 'react-dom';
import "./CharCard.css";

const CharCard = props => (
    <div className="card" onClick={props.imageClick}>
        <div className="img-container">
            <img alt={props.image.replace('.jpeg', '')} src={require("../../images/"+ props.image)} />

        </div>
    </div>
);

export default CharCard;
