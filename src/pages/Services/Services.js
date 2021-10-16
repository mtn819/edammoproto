import React from 'react'
import './Services.css';
import ServiceRow from './ServiceRow';
import {
    CloudQueueOutlined,
    StorageOutlined,
    AutoAwesomeMotionOutlined,
    PersonOutlined,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

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

            {/**TABLE */}
            <div className="servicesTable">
                <ServiceRow
                    icon={<CloudQueueOutlined/>}
                    header="Predictive Modeling"
                    paragraph="Real-time predictive modeling leverages Edammo's breakthrough technology. Edammo employs highly flexible architecture that provides clients with the most accurate and dynamic real-time predictive modeling. Predictive modeling is the most fundamental form of data-based insights that organizations need to derive benefits from their data."
                    href="/services/predictivemodeling"
                />
                <ServiceRow
                    icon={<StorageOutlined/>}
                    header="Accelerated Business Intelligence"
                    paragraph="Real-time business intelligence by Edammo utilizes the break-through technology that enhances data insights. Our partners leverage the Edammo engine by having the ability to generate insights from small data sets. Most data companies can only produce business intelligence and insights when provided with large, static data sets. Conversely, Edammo can provide data-driven intelligence using small, dynamic, data sets."
                    href="/services/acceleratedbusinessintelligence"
                />
                <ServiceRow
                    icon={<AutoAwesomeMotionOutlined/>}
                    header="Partner Product Development"
                    paragraph="If your product is already using an antiquated Data Analytics software, Edammo can provide your business with  cutting-edge, revamped machine learning software . This will breathe new life into your product and enable your business to see new revenue potential, bottlenecks, and savings."
                    href="/services/partnerproductdevelopment"
                />
                <ServiceRow
                    icon={<PersonOutlined/>}
                    header="AI-Enabled Automation"
                    paragraph="Extreme machine learning enabled AI automation is at the core of our business transformation tools. Our unique approach to Big Data combines data and automation into fully scalable solution that can adjusted in real-time to meet the needs of your business."
                    href="/services/aienabledautomation"
                />
                <div className="servicesTable_bottomRow">
                    <div className="servicesTable_bottomText">
                        <h3>Integrating our Technology With Your Business Ecosystem</h3>
                    </div>
                    <div className="servicesTable_bottomRight">
                        <p>You can count on Edammo to not only meet, but exceed all your needs and requests. We help our clients leverage AI-driven insights to accelerate their growth and unlock all the value of their data.</p>
                        <Link to="/getstarted">
                            <div className="servicesTable_bottomDemo">
                                Free Demo
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
