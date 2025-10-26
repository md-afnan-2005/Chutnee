import React from "react";
import "../styles/footer.css";
export default function Footer() { return <footer className="footer" role="contentinfo"><div className="footer-inner"><div>© {new Date().getFullYear()} ChutNee</div><div style={{ color: "var(--muted)" }}>Built with care • Mobile-first</div></div></footer> }
