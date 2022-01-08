import react, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component{
    render(){
        return(
            <header>
                <h2>
                    Logo
                </h2>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/product">Home</Link>
                    <Link to="/about">Home</Link>
                </div>
            </header>
        );
    }
}