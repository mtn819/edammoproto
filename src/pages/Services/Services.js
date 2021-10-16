import React from 'react'
import './Services.css';


function Services() {
    return (
        <div className="services">

            {/**BANNER */}
            <div className="servicesBanner">
                <h1>
                    Jump Into the Next Generation of Machine Learning
                </h1>
                <h2>
                    Our Services
                </h2>
            </div>

            {/**STEPS */}
            <div className="servicesSteps">
                <div className="servicesSteps_col">
                    <div className="servicesSteps_card servicesSteps_cardEven">
                        <div className="servicesSteps_cardText">
                            <h3>Step 1</h3>
                            <p>Ingest Your Data</p>
                        </div>
                        <div className="servicesSteps_rarr">&rarr;</div>
                    </div>
                </div>
                <div className="servicesSteps_col">
                    <div className="servicesSteps_card servicesSteps_cardOdd">
                        <div className="servicesSteps_cardText">
                            <h3>Step 2</h3>
                            <p>Select Your Target Variable</p>
                        </div>
                        <div className="servicesSteps_rarr">&rarr;</div>
                    </div>
                </div>
                <div className="servicesSteps_col">
                    <div className="servicesSteps_card servicesSteps_cardEven">
                        <div className="servicesSteps_cardText">
                            <h3>Step 3</h3>
                            <p>Build Model in One Click</p>
                        </div>
                        <div className="servicesSteps_rarr">&rarr;</div>
                    </div>
                </div>
                <div className="servicesSteps_col">
                    <div className="servicesSteps_card servicesSteps_cardOdd">
                        <div className="servicesSteps_cardText">
                            <h3>Step 4</h3>
                            <p>Explore Your Predictions</p>
                        </div>
                        <div className="servicesSteps_rarr">&rarr;</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
