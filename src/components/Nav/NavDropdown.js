import React from 'react'
import "./NavDropdown.css";

function NavDropdown({main, children, offset=10}) {

    return (
        <div className="navDropdown">
            <div className="navDropdown_main">{main}</div>
            <div
                className="navDropdown_sub"
                style={{transform: `translateX(calc(-100% + ${offset}ch))`}}
            >
                {children}
            </div>
        </div>
    )
}

export default NavDropdown
