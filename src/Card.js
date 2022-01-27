import React from 'react';

function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-img" src={props.item.coverImg} alt="experiences"></img>
                <div className="card-information">
                    <img className="star" src="./Star 1.png" alt="red star"></img>
                    <p className="rating">{props.item.stats.rating}</p> 
                    <p className="reviews">({props.item.stats.reviewCount}) • {props.item.location}</p>
                </div>
            <p className="card-title">{props.item.title}</p>
            <p className="price"><b>From ${props.item.price}</b> / person</p>
        </div>
    )
};

export default Card;

