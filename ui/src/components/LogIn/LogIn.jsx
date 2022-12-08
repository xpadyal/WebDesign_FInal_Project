import React from "react";
import homeImg from "../../img/home.jpg";
import "./LogIn.css";

const LogIn = () => {
  return (
    <div className="wrapper">
      <div className="left">
        <img src={homeImg} alt="" />
      </div>
      <div className="right">
        <h3 className="title">Sign In</h3>
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
          <input type="submit" value="SIGN IN" className="submit" />
          <div className="links">
            <a href="#">Forgot Password</a>
            <span>
              Already have an account ? <a href="#">Log In</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
