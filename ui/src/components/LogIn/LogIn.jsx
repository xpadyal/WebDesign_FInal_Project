import React from "react";
import homeImg from "../../img/home.jpg";
import "./Login.css";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="wrapper">
      <div className="left">
        <img src={homeImg} alt="" />
      </div>
      <div className="right">
        <h3 className="title">Log In</h3>
        <form action="" className="form">
          <div className="email">
            <label for="fname">Email</label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="abc@gmail.com"
            />
          </div>
          <div className="password">
            <label for="lname">Password</label>
            <input type="text" id="lname" name="lname" placeholder="******" />
          </div>
          <input type="submit" value="LOG IN" className="submit" />
          <div className="links">
            <a href="#">Forgot Password</a>
            <span>
              Don't have an account ? <Link to="/signin">Signin</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
