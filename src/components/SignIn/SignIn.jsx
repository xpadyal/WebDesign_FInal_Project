import React, { Component } from 'react';
import homeImg from "../../img/home.jpg";
import "./SignIn.css";
import { Link } from "react-router-dom";

export class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fname: "",
          lname: "",
          email: "",
          password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleSubmit(e) {
        e.preventDefault();
        const { fname, lname, email, password } = this.state;
        console.log(fname, lname, email, password);
        fetch("http://localhost:8000/api/register", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            fname,
            lname,
            email,
            password,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            window.location.href = '/';
            console.log(data, "userRegister");
          });
      }
  render() {
    return (
      <div className="container">
        <div className="wrapper">
      <div className="left">
        <img src={homeImg} alt="" />
      </div>
      <div className="right">
        <h3 className="title">Sign Up</h3>
        <form  onSubmit={this.handleSubmit} className="form">
          <div className="firstName">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            onChange={(e) => this.setState({ fname: e.target.value })}
          />
          </div>
          <div className="lastName">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            onChange={(e) => this.setState({ lname: e.target.value })}
          />
          </div>
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
            placeholder="*******"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          </div>
          <input type="submit" value="SIGN UP" className="submit" />
          <div className="links">
            <span>
              Already have an account ? <Link to="/">Login</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
      </div>
    )
  }
}

export default SignIn