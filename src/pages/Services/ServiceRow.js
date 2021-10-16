import React, {useEffect} from 'react'
import "./ServiceRow.css";
import {
    Link
} from "react-router-dom";
import Aos from "aos";

function ServiceRow({icon, header, paragraph, href}) {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);

    return (
        <div className="servicesRow">
            <div className="servicesRow_colL">
                <div data-aos="fade-up" className="servicesRow_iconCard">
                    {icon}
                    <div className="servicesRow_cardHr"></div>
                </div>
            </div>
            <div className="servicesRow_colR">
                <div data-aos="fade-right" className="servicesRow_text">
                    <h3>{header}</h3>
                    <p>{paragraph}</p>
                </div>
                <div className="servicesRow_learnMoreSubcol">
                    <Link to={href}>
                        <div className="servicesRow_learnMore">Learn More</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceRow
