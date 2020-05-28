import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/logo.svg";

 // This is a class component and we can call it directly using rcc
 
export default class Navbar extends Component {
  state = { // we define state for our navbar intially set as closed
    isOpen: false
  };

// This function handles the toggling of the navbar icon. So if it is open it closes it and viceversa.
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">  
        <div className="nav-center">
          <div className="nav-header">

            {/* These links with help of prop "to" and redirects to the link of the page we wanna go */}

            <Link to="/">
              <img src= {logo} alt="Hotel Logo" />
            </Link>

            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>

          </div>

          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
            // In app.css I have added to classes nav-links and show nav. Thus using ternary operator I call them for their use case.
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/room">Rooms</Link>
            </li>

            <li>
              <Link to="/register">BookRoom</Link>
            </li>
            <li>
              <Link to="/display">Display</Link>
            </li>
            <li>
              <Link to="/addroom">AddRoom</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}