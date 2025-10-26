import React from "react";
import "../styles/cards.css";
import CardItem from "../shared/CardItem";
const items = [
    { title: "Tasty Biryani", desc: "Savour the spices", img: "/assets/images/card1.jpg" },
    { title: "Street-style Chaat", desc: "Tangy & spicy", img: "/assets/images/card2.jpg" },
    { title: "Homestyle Curry", desc: "Comfort in a bowl", img: "/assets/images/card3.jpg" },
    { title: "Sweet Treats", desc: "Desserts to love", img: "/assets/images/card4.jpg" }
];
export default function Features() { return <section className="section"><h2 className="section-title">Popular dishes</h2><div className="cards-grid">{items.map((it, idx) => <CardItem key={idx} item={it} />)}</div></section> }
