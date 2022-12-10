import React, { Component } from 'react';
import homeImg from "../../img/home.jpg";
import "./Login.css";
import { Link } from "react-router-dom";

export class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state;
        console.log(email, password)
        fetch("http://localhost:8000/api/login", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userRegister");
            if (data.status == "ok") {
              window.location.href = '/';
              window.localStorage.setItem("token", data.data);
              
            }
            else {
              alert("User not found");
            }
          });
      }
  render() {
    return (
      <div className="component">
        <div className="wrapper">
      <div className="left">
        <img src={homeImg} alt="" />
      </div>
      <div className="right">
        <h3 className="title">Log In</h3>
        <form onSubmit={this.handleSubmit} className="form">
          <div className="email">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          </div>
          <div className="password">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="*****"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          </div>
          <input type="submit" value="LOG IN" className="submit" />
          <div className="links">
            <a href="#">Forgot Password</a>
            <span>
              Don't have an account ? <Link to="/SignIn">Sign Up</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
      </div>
    )
  }
}

export default LogIn
