import React from "react";
import MultiplePizzas from '../assets/MultiplePizzas.jpeg';
import './styles/About.css';

function About() {
    return (
        <div className="about">
            <div className="aboutTop"
                style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
            <div className="aboutBottom">
                <h1>About us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, optio.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odit ea ipsa ut explicabo vel laboriosam excepturi quia ipsam eos voluptates harum, praesentium tenetur placeat quisquam quae esse amet ducimus nesciunt. Maxime magni error doloremque temporibus consectetur itaque obcaecati in repellendus reiciendis maiores facilis ullam sit, laudantium nulla delectus adipisci autem quo, laborum nobis placeat officiis. Consectetur dicta facere magni illum, fugiat repellendus atque voluptatem quaerat iusto animi mollitia amet enim deleniti vitae sint corrupti ipsum facilis maiores quia iure blanditiis, doloremque eum autem error? Hic incidunt necessitatibus tenetur consectetur ratione delectus alias nihil quas cupiditate veniam, animi, numquam laboriosam!</p>
            </div>
        </div>
    );
}
export default About;