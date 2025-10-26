import React from "react";
import { Link } from "react-router-dom";

export default function ResponsiveMenu({ onClose }) {
    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.4)",
                display: "flex",
                justifyContent: "flex-end",
                zIndex: 9999,
            }}
        >
            <div
                style={{
                    width: 260,
                    background: "#fff",
                    padding: 18,
                    borderLeft: "1px solid #eee",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                }}
            >
                <button
                    onClick={onClose}
                    style={{
                        background: "transparent",
                        border: "none",
                        alignSelf: "flex-end",
                        fontSize: 18,
                        cursor: "pointer",
                        color: "var(--accent)",
                    }}
                >
                    ✕
                </button>
                <nav
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 14,
                        fontWeight: 600,
                    }}
                >
                    <Link to="/" onClick={onClose}>
                        Home
                    </Link>
                    <Link to="/about" onClick={onClose}>
                        About
                    </Link>
                    <Link to="/contact" onClick={onClose}>
                        Contact
                    </Link>
                </nav>
            </div>
        </div>
    );
}
