import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <h1>Welcome to Schedule Handler!</h1>
            <nav>
                <NavLink to="/meetings">
                    Meetings
                </NavLink>
                <NavLink to="/add-meeting">
                    Add Meeting
                </NavLink>
            </nav>
        </div>
    );
}

export default Header;
