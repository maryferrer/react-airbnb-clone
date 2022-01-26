import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <img className="card-img" src={props.img} alt="Katie Zaferes"></img>
                <div className="card-information">
                    <img className="star" src="./Star 1.png" alt="red star"></img>
                    <p className="rating">{props.rating}</p> 
                    <p className="reviews">({props.reviewCount}) • {props.country}</p>
                </div>
            <p className="card-title">{props.title}</p>
            <p className="price"><b>From ${props.price}</b> / person</p>
        </div>
    )
};

export default Card;

