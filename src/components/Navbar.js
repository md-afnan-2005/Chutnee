import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import MenuIcon from "../assets/icons/menu.svg";
import ResponsiveMenu from "./ResponsiveMenu";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="nav-inner">
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <Link to="/" className="logo">
                        ChutNee
                    </Link>
                </div>

                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <button className="cta">Get Started</button>

                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open Menu"
                        style={{
                            background: "transparent",
                            border: "none",
                            padding: 6,
                            cursor: "pointer",
                        }}
                    >
                        <img src={MenuIcon} alt="menu" width="22" height="22" />
                    </button>
                </div>
            </div>

            {menuOpen && <ResponsiveMenu onClose={() => setMenuOpen(false)} />}
        </header>
    );
}
