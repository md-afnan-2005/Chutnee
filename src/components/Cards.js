import React from "react";
import "../styles/cards.css";

const items = [
    {
        title: "Tasty Biryani",
        desc: "Savour the spices",
        img: "/assets/images/card1.jpg",
    },
    {
        title: "Street-style Chaat",
        desc: "Tangy & spicy",
        img: "/assets/images/card2.jpg",
    },
    {
        title: "Homestyle Curry",
        desc: "Comfort in a bowl",
        img: "/assets/images/card3.jpg",
    },
    {
        title: "Sweet Treats",
        desc: "Desserts to love",
        img: "/assets/images/card4.jpg",
    },
];

export default function Cards() {
    return (
        <section className="section">
            <h2 className="section-title">Popular dishes</h2>
            <div className="cards-grid">
                {items.map((it, i) => (
                    <article className="card fade-in" key={i}>
                        <div
                            className="card-media"
                            style={{
                                backgroundImage: `url(${it.img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            aria-hidden
                        ></div>
                        <h3>{it.title}</h3>
                        <p>{it.desc}</p>
                        <div className="card-actions">
                            <div style={{ color: "var(--muted)", fontSize: 13 }}>₹129</div>
                            <button className="card-btn">Order</button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
