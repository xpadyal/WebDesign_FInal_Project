import React from "react";
import homeImg from "../../img/home.jpg";
import "./SignIn.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="wrapper">
      <div className="left">
        <img src={homeImg} alt="" />
      </div>
      <div className="right">
        <h3 className="title">Sign Up</h3>
        <form action="" className="form">
          <div className="firstName">
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="fname" placeholder="john" />
          </div>
          <div className="lastName">
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lname" placeholder="doe" />
          </div>
          <div className="email">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="abc@gmail.com"
            />
          </div>
          <div className="password">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="******"
            />
          </div>
          <input type="submit" value="SIGN IN" className="submit" />
          <div className="links">
            <span>
              Already have an account ? <Link to="/login">Login</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
