import React from "react";
import "./card.css";
import cardImg from "../../img/card1.jpg";

const Card = ({ title, desc, price, img }) => {
  return (
    <div className="card">
      <img src={img || cardImg} alt="" className="card-img" />
      <h3>{title}</h3>
      <div className="desc">{desc}</div>
      <div className="card-price">
        <p>Starting at:</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default Card;
