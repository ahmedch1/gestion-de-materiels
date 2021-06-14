import React, { Component } from "react";
import axios from "axios";
export default class signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }
    //send data of login to db
    async signup() {
        await axios
            .post("/login", {
                email: this.state.email,
                password: this.state.password,
            })
            .then(function (res) {
                if (res.data.status === "successLogg") {
                    console.log(res);
                    document.cookie = `username=${res.data.useremail},${res.data.username}`;
                    window.location.replace("/form");
                }
            });
    }
    render() {
        return (
            <div className="logs">
                <h1>Singup</h1>
                <hr/>
                <div className="textbox">
                    <i className="fas fa-user"/>
                    <input
    type="email"
    placeholder="Enter Your Email"
    onChange={(e) => this.setState({email: e.target.value})}
    />
                </div>
                <hr/>
                <div className="textbox">
                    <i className="fas fa-lock"/>
                    <input
    type="password"
    placeholder="Enter Your Password"
    onChange={(e) => this.setState({password: e.target.value})}
    />
                </div>
                <hr/>
                <button className="btn" type="submit" onClick={this.signup().bind(this)}>
                    Submit
                </button>
                <hr/>
            </div>
        );
    }
}
