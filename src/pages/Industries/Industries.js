import React from 'react'
import "./Industries.css";
import IndustriesCard from './IndustriesCard';
import onebyone from "./res/1x1placeholder.png";

function Industries() {
    return (
        <div className="industries">
            {/**BANNER */}
            <div className="industriesBanner">
                <div className="industriesBanner_top"></div>
                <div className="industriesBanner_bottom">
                    <h1>Industries</h1>
                    <div className="industriesBanner_bottomHr"></div>
                    <p>Edammo is real world artificial intelligence putting business insights at your fingertips every day. We help you make the right business decisions using our innovative technology that derives accurate, real-time insights from even the smallest and most dynamic data sets. Versatile technology allows for flexible usage via API or custom built interfaces or apps and adaptable architecture ensures you can use in cloud, hybrid or local applications or flex as your business grows. How are you making data driven decisions today?</p>
                </div>    
            </div>

            {/**CARDS */}
            <div className="industriesCards">
                <IndustriesCard
                    imgSrc={onebyone}
                    text="Aviation"
                    href="/industries/aviation"
                />
                <IndustriesCard
                    imgSrc={onebyone}
                    text="Aviation"
                    href="/industries/aviation"
                />
                <IndustriesCard
                    imgSrc={onebyone}
                    text="Aviation"
                    href="/industries/aviation"
                />
                <IndustriesCard
                    imgSrc={onebyone}
                    text="Aviation"
                    href="/industries/aviation"
                />
                <IndustriesCard
                    imgSrc={onebyone}
                    text="Aviation"
                    href="/industries/aviation"
                />
                <IndustriesCard
                    imgSrc={onebyone}
                    text="Aviation"
                    href="/industries/aviation"
                />
                <IndustriesCard
                    imgSrc={onebyone}
                    text="Aviation"
                    href="/industries/aviation"
                />
                <IndustriesCard
                    imgSrc={onebyone}
                    text="Aviation"
                    href="/industries/aviation"
                />
                <IndustriesCard
                    imgSrc={onebyone}
                    text="Aviation"
                    href="/industries/aviation"
                />
            </div>  
        </div>
    )
}

export default Industries
