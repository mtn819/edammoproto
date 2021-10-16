import React, { useEffect } from 'react';
import "./ServicesSubTemplate.css";
import {
    Link
} from "react-router-dom"
import {
    ArrowForwardIos
} from "@mui/icons-material";

function ServicesSubTemplate({
    bannerh1,
    bannerp,
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    bottomh2,
    bottomp1,
    bottomp2,
}) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="servicesSub">

            {/**BANNER */}
            <div className="servicesSubBanner">
                <h1>{bannerh1}</h1>
                <p>{bannerp}</p>
                <Link to="/getstarted">
                    <div className="servicesSubBanner_demo">
                        <p>Free Demo</p>
                        <ArrowForwardIos/>
                    </div>
                </Link>
            </div>

            {/**USECASES */}
            <div className="servicesSubUsecases">
                <h2>Potential Use Cases</h2>
                <div className="servicesSubUsecases_cards">
                    <div className="servicesSubUsecases_row">
                        <div className="servicesSubUsecases_card servicesSubUsecases_light">
                            {card1}
                        </div>
                        <div className="servicesSubUsecases_card servicesSubUsecases_dark">
                            {card2}
                        </div>
                        <div className="servicesSubUsecases_card servicesSubUsecases_light">
                            {card3}
                        </div>
                        <div className="servicesSubUsecases_card servicesSubUsecases_dark">
                            {card4}
                        </div>
                    </div>
                    <hr/>
                    <div className="servicesSubUsecases_row">
                        <div className="servicesSubUsecases_card servicesSubUsecases_dark">
                            {card5}
                        </div>
                        <div className="servicesSubUsecases_card servicesSubUsecases_light">
                            {card6}
                        </div>
                        <div className="servicesSubUsecases_card servicesSubUsecases_dark">
                            {card7}
                        </div>
                        <div className="servicesSubUsecases_card servicesSubUsecases_light">
                            {card8}
                        </div>
                    </div>
                </div>
            </div>

            {/**BOTTOM */}
            <div className="servicesSubBottom">
                <h2>{bottomh2}</h2>
                <p>{bottomp1}</p>
                <p>{bottomp2}</p>
            </div>

        </div>
    )
}

export default ServicesSubTemplate
