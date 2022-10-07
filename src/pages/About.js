import React from "react";
import MultiplePizzas from '../assets/MultiplePizzas.jpeg';
import './styles/About.css';

function About() {
    return(
        <div className="about">
            <div className="aboutTop"
             style={{backgroundImage: `url(${MultiplePizzas})`}}></div>
            <div className="aboutBottom">
                <h1>About us</h1>
                <p>Lorem10</p>
            </div>
        </div>
    );
}
export default About;