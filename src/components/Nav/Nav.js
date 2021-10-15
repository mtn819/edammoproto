import React from 'react'
import { Link } from "react-router-dom";
import "./Nav.css";
import NavDropdown from "./NavDropdown";

function Nav() {
    return (
        <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/rnd">R&amp;D</Link>
            <NavDropdown main={<Link to="/services">Services</Link>} offset={"Services".length}>
                <Link to="/services/predictivemodeling">Predictive Modeling</Link>
                <Link to="/services/acceleratedbusinessintelligence">Accelerated Business Intelligence</Link>
                <Link to="/services/partnerproductdevelopment">Partner Product Development</Link>
                <Link to="/services/aienabledautomation">AI-Enabled Automation</Link>
            </NavDropdown>
            <NavDropdown main={<Link to="/industries">Industries</Link>} offset={"Industries".length}>
                <Link to="/services/aviation">Aviation</Link>
                <Link to="/services/cargoandlogistics">Cargo &amp; Logistics</Link>
                <Link to="/services/healthcare">Healthcare</Link>
                <Link to="/services/insurance">Insurance</Link>
                <Link to="/services/humanresources">Human Resources</Link>
                <Link to="/services/manufacturing">Manufacturing</Link>
                <Link to="/services/marketing">Marketing</Link>
                <Link to="/services/oilandgas">Oil &amp; Gas</Link>
                <Link to="/services/pharmaceutical">Pharmaceutical</Link>
                <Link to="/services/retail">Retail</Link>
                <Link to="/services/travelandtourism">Travel/Tourism</Link>
                <Link to="/services/telecommunications">Telecommunications</Link>
                <Link to="/services/utilities">Utilities</Link>
            </NavDropdown>
            <NavDropdown main={<Link to="/casestudies">Case Studies</Link>} offset={"Case Studies".length}>
                <Link to="/casestudies/humanresourcetech">Human Resource Tech</Link>
                <Link to="/casestudies/marketingtech">Marketing Tech</Link>
                <Link to="/casestudies/imagerecognitiontech">Image Recognition Tech</Link>
            </NavDropdown>
            <Link to="/aboutus">About Us</Link>
            <Link to="/contactus">
                <div className="nav_contactbutton">Contact Us</div>
            </Link>
        </nav>
    )
}

export default Nav
