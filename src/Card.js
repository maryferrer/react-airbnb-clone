import React from 'react';

function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-img" src={props.img} alt="experiences"></img>
                <div className="card-information">
                    <img className="star" src="./Star 1.png" alt="red star"></img>
                    <p className="rating">{props.rating}</p> 
                    <p className="reviews">({props.reviewCount}) • {props.location}</p>
                </div>
            <p className="card-title">{props.title}</p>
            <p className="price"><b>From ${props.price}</b> / person</p>
        </div>
    )
};

export default Card;

