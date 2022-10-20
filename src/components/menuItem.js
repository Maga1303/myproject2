import React from "react";
// import BannerImage from '../assets/Very expensiv.jpg'

function MenuItem({image, name, price}){
    return (
            <div className="menuItem">
            <div style={{backgroundImage: `url(${image})`}} ></div>
            <h1>{name}</h1>
            <p>${price}</p>
            </div>
    );
}
export default MenuItem;