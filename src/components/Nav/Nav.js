import React from 'react'
import { Link } from "react-router-dom";
import "./Nav.css";
import NavDropdown from "./NavDropdown";
import useScrollPosition from '@react-hook/window-scroll';
import { useLocation } from "react-router-dom";

function Nav() {
    const scrollY = useScrollPosition(30);

    const location = useLocation();

    function navModifiers() {
        if(scrollY > 500){
            return "nav--hidden";
        }
        if(scrollY > 5) {
            return "nav--opaque";
        }
    }

    return (
        <nav className={"nav " + navModifiers()}>
            <Link to="/" className={(location.pathname === "/") ? "nav_link--active" : ""}>Home</Link>
            <Link to="/rnd" className={(location.pathname === "/rnd") ? "nav_link--active" : ""}>R&amp;D</Link>
            <NavDropdown main={<Link to="/services" className={(location.pathname === "/services") ? "nav_link--active" : ""}>Services</Link>} offset={"Services".length}>
                <Link to="/services/predictivemodeling" className={(location.pathname === "/services/predictivemodeling") ? "nav_link--active" : ""}>Predictive Modeling</Link>
                <Link to="/services/acceleratedbusinessintelligence" className={(location.pathname === "/services/acceleratedbusinessintelligence") ? "nav_link--active" : ""}>Accelerated Business Intelligence</Link>
                <Link to="/services/partnerproductdevelopment" className={(location.pathname === "/services/partnerproductdevelopment") ? "nav_link--active" : ""}>Partner Product Development</Link>
                <Link to="/services/aienabledautomation" className={(location.pathname === "/services/aienabledautomation") ? "nav_link--active" : ""}>AI-Enabled Automation</Link>
            </NavDropdown>
            <NavDropdown main={<Link to="/industries" className={(location.pathname === "/industries") ? "nav_link--active" : ""}>Industries</Link>} offset={"Industries".length}>
                <Link to="/industries/aviation" className={(location.pathname === "/industries/aviation") ? "nav_link--active" : ""}>Aviation</Link>
                <Link to="/industries/cargoandlogistics" className={(location.pathname === "/industries/cargoandlogistics") ? "nav_link--active" : ""}>Cargo &amp; Logistics</Link>
                <Link to="/industries/healthcare" className={(location.pathname === "/industries/healthcare") ? "nav_link--active" : ""}>Healthcare</Link>
                <Link to="/industries/insurance"  className={(location.pathname === "/industries/insurance") ? "nav_link--active" : ""}>Insurance</Link>
                <Link to="/industries/humanresources"  className={(location.pathname === "/industries/humanresources") ? "nav_link--active" : ""}>Human Resources</Link>
                <Link to="/industries/manufacturing" className={(location.pathname === "/industries/manufacturing") ? "nav_link--active" : ""}>Manufacturing</Link>
                <Link to="/industries/marketing" className={(location.pathname === "/industries/marketing") ? "nav_link--active" : ""}>Marketing</Link>
                <Link to="/industries/oilandgas" className={(location.pathname === "/industries/oilandgas") ? "nav_link--active" : ""}>Oil &amp; Gas</Link>
                <Link to="/industries/pharmaceutical" className={(location.pathname === "/industries/pharmaceutical") ? "nav_link--active" : ""}>Pharmaceutical</Link>
                <Link to="/industries/retail" className={(location.pathname === "/industries/retail") ? "nav_link--active" : ""}>Retail</Link>
                <Link to="/industries/travelandtourism" className={(location.pathname === "/industries/travelandtourism") ? "nav_link--active" : ""}>Travel/Tourism</Link>
                <Link to="/industries/telecommunications" className={(location.pathname === "/industries/telecommunications") ? "nav_link--active" : ""}>Telecommunications</Link>
                <Link to="/industries/utilities" className={(location.pathname === "/industries/utilities") ? "nav_link--active" : ""}>Utilities</Link>
            </NavDropdown>
            <NavDropdown main={<Link to="/casestudies" className={(location.pathname === "/casestudies") ? "nav_link--active" : ""}>Case Studies</Link>} offset={"Case Studies".length}>
                <Link to="/casestudies/humanresourcetech" className={(location.pathname === "/casestudies/humanresourcetech") ? "nav_link--active" : ""}>Human Resource Tech</Link>
                <Link to="/casestudies/marketingtech" className={(location.pathname === "/casestudies/marketingtech") ? "nav_link--active" : ""}>Marketing Tech</Link>
                <Link to="/casestudies/imagerecognitiontech" className={(location.pathname === "/casestudies/imagerecognitiontech") ? "nav_link--active" : ""}>Image Recognition Tech</Link>
            </NavDropdown>
            <Link to="/aboutus" className={(location.pathname === "/aboutus") ? "nav_link--active" : ""}>About Us</Link>
            <Link to="/contactus">
                <div className="nav_contactbutton">Contact Us</div>
            </Link>
        </nav>
    )
}

export default Nav
