import React, { useEffect } from 'react'
import "./Home.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import {
    Check,
    Clear,
    CloudQueueOutlined,
    StorageOutlined,
    AutoAwesomeMotionOutlined,
    PersonOutlined,
} from '@mui/icons-material';
import Carousel from 'react-elastic-carousel';
import Particles from "react-particles-js";

function Home() {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);

    return (
        <div className="home">
            
            {/**SPLASH */}
            <div className="homeSplash">
                <h1>A Revolutionary<br/>Approach to<br/>Artificial Intelligence</h1>
                <p>Faster and More Precise than Deep Learning and Traditional Data Mining using Patented Technology</p>
                <Link to="/services/solutions">
                    <div className="homeSplash_learnMore">Learn More</div>
                </Link>
            </div>

            {/**MOST */}
            <div className="homeMost">
                <h2 data-aos="fade-up">Most Business Cannot Unlock the Value of their Data</h2>
                <div className="homeMost_cards">
                    <div className="homeMost_cardsCol">
                        <div className="homeMost_card">
                            <h3>$3.1T</h3>
                            <p>Estimate Locked Potential of Your Data</p>
                        </div>
                        <div data-aos="fade-right" className="homeMost_cardHr"></div>
                    </div>
                    <div className="homeMost_cardsCol">
                        <div className="homeMost_card">
                            <h3>70%</h3>
                            <p>of companies cannot Leverage their own Data</p>
                        </div>
                        <div data-aos="fade-right" className="homeMost_cardHr"></div>
                    </div>
                    <div className="homeMost_cardsCol">
                        <div className="homeMost_card">
                            <h3>98%</h3>
                            <p>of the best Deep Learning models are costly and dependent on high caliber GPU’s and TPU’s</p>
                        </div>
                        <div data-aos="fade-right" className="homeMost_cardHr"></div>
                    </div>
                </div>
            </div>

            {/**ADVANTAGE */}
            <div className="homeAdvantage">
                <h2>The Edammo Advantage</h2>
                <div className="homeAdvantage_statcards">
                    <div className="homeAdvantage_statcardsCol">
                        <div className="homeAdvantage_statcard">
                            <h3>9.2%</h3>
                            <div data-aos="fade-right" className="homeAdvantage_statcardHr"></div>
                            <p>Avg. Profit Increase for Companies</p>
                        </div>
                    </div>
                    <div className="homeAdvantage_statcardsCol">
                        <div className="homeAdvantage_statcard">
                            <h3>600x</h3>
                            <div data-aos="fade-right" className="homeAdvantage_statcardHr"></div>
                            <p>Faster than Deep Learning</p>
                        </div>
                    </div>
                    <div className="homeAdvantage_statcardsCol">
                        <div className="homeAdvantage_statcard">
                            <h3>90%</h3>
                            <div data-aos="fade-right" className="homeAdvantage_statcardHr"></div>
                            <p>Reduction in Model Training and Deployment Time</p>
                        </div>
                    </div>
                </div>
                <div className="homeAdvantage_table">
                    <div className="homeAdvantage_tableCol homeAdvantage_tableCol1">
                        <p className="homeAdvantage_tableHeader">INSIGHTS FROM<br/>DYNAMIC DATA SETS</p>
                        <p className="homeAdvantage_tableHeader">INSIGHTS FROM<br/>SMALL DATASETS</p>
                        <p className="homeAdvantage_tableHeader">TRAIN YOUR MODEL<br/>IN SECONDS</p>
                        <p className="homeAdvantage_tableHeader">REAL-TIME<br/>DATA MINING</p>
                        <p className="homeAdvantage_tableHeader">0 DATA SCIENTISTS<br/>NEEDED</p>
                        <p className="homeAdvantage_tableHeader">HIGHLY ACCURATE<br/>PREDICTIONS</p>
                    </div>
                    <div className="homeAdvantage_tableCol">
                        <p className="homeAdvantage_tableHeader">MACHINE<br/>LEARNING</p>
                        <p><Clear/></p>
                        <p><Clear/></p>
                        <p><Check/></p>
                        <p><Clear/></p>
                        <p><Clear/></p>
                        <p><Clear/></p>
                    </div>
                    <div className="homeAdvantage_tableCol">
                        <p className="homeAdvantage_tableHeader">DEEP<br/>LEARNING</p>
                        <p><Clear/></p>
                        <p><Clear/></p>
                        <p><Clear/></p>
                        <p><Clear/></p>
                        <p><Clear/></p>
                        <p><Check/></p>
                    </div>
                    <div className="homeAdvantage_tableCol">
                        <p className="homeAdvantage_tableHeader homeAdvantage_tableEdammo">EDAMMO</p>
                        <p><Check/></p>
                        <p><Check/></p>
                        <p><Check/></p>
                        <p><Check/></p>
                        <p><Check/></p>
                        <p><Check/></p>
                    </div>
                </div>
            </div>

            {/**LET */}
            <div className="homeLet">
                <div className="homeLet_left">
                    <div data-aos="fade-right" className="homeLet_leftText">
                        <h2>Let Us Take Your Business to the Next Level</h2>
                        <p>Our patent-pending technology can unlock the full value of your data. We derive insights from small and limited training sets as well as from large, dynamic data. Our solution will revolutionize the way your company leverages your data.</p>
                    </div>
                </div>
                <div className="homeLet_right">
                    <div className="homeLet_cardRow homeLet_cardRowL">
                        <div className="homeLet_card">
                            <div data-aos="fade-right" className="homeLet_cardIcon"><CloudQueueOutlined/></div>
                            <h3 data-aos="fade-right">Easy Tool Integration</h3>
                            <p data-aos="fade-right">Limited internal development costs for your business.</p>
                        </div>
                        <div className="homeLet_card">
                            <div data-aos="fade-right" className="homeLet_cardIcon"><StorageOutlined/></div>
                            <h3 data-aos="fade-right">Capturing Dynamic Data</h3>
                            <p data-aos="fade-right">We can derive insights from various data sets with speed and accuracy.</p>
                        </div>
                    </div>
                    <div className="homeLet_cardRow homeLet_cardRowR">
                        <div className="homeLet_card">
                            <div data-aos="fade-right" className="homeLet_cardIcon"><AutoAwesomeMotionOutlined/></div>
                            <h3 data-aos="fade-right">No Cookie-Cutter Solutions</h3>
                            <p data-aos="fade-right">We tailor each solution to fit the unique needs of all of our clients.</p>
                        </div>
                        <div className="homeLet_card">
                            <div data-aos="fade-right" className="homeLet_cardIcon"><PersonOutlined/></div>
                            <h3 data-aos="fade-right">Fully Custom Built Application </h3>
                            <p data-aos="fade-right">Flexible on Cloud, Hybrid and Local.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/**CAROUSEL */}
            <div data-aos="fade" className="homeCarousel">
                <Carousel
                    showArrows={false}
                >
                    <div className="homeCarousel_item">
                        <div className="homeCarousel_card homeCarousel_cardWinslow">
                            <h3>Testimonials</h3>
                            <div className="homeCarousel_cardHr"></div>
                            <p className="homeCarousel_quote">"Brilliant technology transformed our data into actionable insights"</p>
                            <p className="homeCarousel_credit">— D. Winslow, CEO, On-Target Data</p>
                        </div>
                    </div>
                    <div className="homeCarousel_item">
                        <div className="homeCarousel_card homeCarousel_cardPrakash">
                            <h3>Testimonials</h3>
                            <div className="homeCarousel_cardHr"></div>
                            <p className="homeCarousel_quote">"Measurable improvement to our process. Edammo developed a full AI-driven application based on their technology resulting in dramatic time savings."</p>
                            <p className="homeCarousel_credit">— A. Prakash, CEO, Verseon</p>
                        </div>
                    </div>
                </Carousel>
            </div>

            {/**CONTACT */}
            <div data-aos="fade" className="homeContact">
                <div className="homeContact_nonBg">
                    <h3>Unlock the Value of your Data</h3>
                    <form action="ActionNotYetHookedUp" method="post">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" id="firstname" name="firstname"/>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message"></textarea>
                        <label htmlFor="emailaddress">Email Address</label>
                        <input type="email" id="emailaddress" name="emailaddress"/>
                        <button type="submit">Contact Us</button>
                    </form>
                </div>
                <Particles
                    className="homeContact_particles"
                />
            </div>
        </div>

        
    )
}

export default Home
