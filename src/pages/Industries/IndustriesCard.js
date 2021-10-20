import React from 'react'
import "./IndustriesCard.css";
import { Link } from "react-router-dom";

function IndustriesCard({imgSrc, text, href}) {
    return (
        <Link to={href}>
        <div className="industriesCard">
            <img src={imgSrc} alt={text}/>
            <p>{text}</p>
        </div>
        </Link>
    )
}

export default IndustriesCard
