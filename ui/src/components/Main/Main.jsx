import React from "react";
import "./main.css";
import { FiSearch } from "react-icons/fi";
import Card from "../Card/Card";

const Main = () => {
  const data = [
    {
      title: "GERMANY",
      desc: "2014 FIFA World Cup Brazil™",
      price: "2119",
      img: "",
    },
    {
      title: "GERMANY",
      desc: "2014 FIFA World Cup Brazil™",
      price: "2119",
      img: "",
    },
    ,
    {
      title: "GERMANY",
      desc: "2014 FIFA World Cup Brazil™",
      price: "2119",
      img: "",
    },
    {
      title: "GERMANY",
      desc: "2014 FIFA World Cup Brazil™",
      price: "2119",
      img: "",
    },
    ,
    {
      title: "GERMANY",
      desc: "2014 FIFA World Cup Brazil™",
      price: "2119",
      img: "",
    },
  ];

  return (
    <div className="main">
      <div className="main-left">
        <h1>MarketPlace</h1>
        <div className="search">
          <input type="text" placeholder="Search" />
          <FiSearch className="search-icon" />
        </div>
        <div className="filter-container">
          <h3 className="filter-price">Price Range</h3>

          <h3>Low</h3>
          <input type="text" placeholder="US $0" className="filter-input" />

          <h3>High</h3>
          <input
            type="text"
            placeholder="US $100,000"
            className="filter-input"
          />

          <button className="apply-btn">APPLY</button>
        </div>
      </div>
      <div className="main-right">
        {data.map((data) => (
          <Card
            title={data.title}
            desc={data.desc}
            price={data.price}
            img={data.img}
          />
        ))}

        {/* <Card
          title={"GERMANY"}
          desc={"2014 FIFA World Cup Brazil™"}
          price={2119}
          img={""}
        /> */}
      </div>
    </div>
  );
};

export default Main;
