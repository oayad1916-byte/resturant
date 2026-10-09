import React, { useState } from "react";
import "../components/hero.css";
import logo from "../assets/images/logo.png";
import burger1 from "../assets/images/bg-hero.png";
import burger2 from "../assets/images/bg-hero3.png";
import burger3 from "../assets/images/bg-hero4.png";
// import logo from"../assets/images/logo.png"

function HeroSection() {
    const bgHero = [burger1, burger2, burger3];

    const [current, setCurrent] = useState(0);

    const nextImage = () => {
        setCurrent((prev) => (prev + 1) % bgHero.length);
    };

    const prevImage = () => {
        setCurrent((prev) => (prev - 1 + bgHero.length) % bgHero.length);
    };
    return (
        <div className="app">
            <section className="hero" id="home">
                <img className="bg-hero" key={current} src={bgHero[current]} alt="" />

                <nav>
                    <a href="#">
                        <img src={logo} alt="" />
                    </a>
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#menu">Menu</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#story">Our Story</a>
                        </li>
                        <li>
                            <a href="#galary">gallery</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>

                        
                    </ul>
                    <a
                        href="https://wa.me/9647841664018?text=Hello,%20I%20would%20like%20to%20book%20a%20table%20at%20LUXE."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="book-btn"
                    >
                        Book a Table
                    </a>
                    <div className="menu">
                        <i class="bi bi-list"></i>
                    </div>
                </nav>

                <button className="slider-btn prev-btn" onClick={prevImage}>
                    ❮
                </button>
                <button className="slider-btn next-btn" onClick={nextImage}>
                    ❯
                </button>
                <div className="hero-text" key={current}>
                    <h1>BURGERS</h1>
                    <h2>MADE BETTER</h2>
                    <p>
                        Experience the perfect blend of premium ingredients and exceptional
                        taste. Every bite is a masterpiece.
                    </p>

                    <div className="hero-btns">
                        <a href="#menu" className="view-btn">
                            View Our Menu
                        </a>
                        <a  href="https://wa.me/9647841664018?text=Hello,%20I%20would%20like%20to%20book%20a%20table%20at%20LUXE."
                        target="_blank"
                        rel="noopener noreferrer" className="book-btn2">
                            <i class="bi bi-calendar-check"></i> Book a Table
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HeroSection;
