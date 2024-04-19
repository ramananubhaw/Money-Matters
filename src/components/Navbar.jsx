import React from "react";
import './Navbar.css';
import logo4 from '../images/logo4.png';
import Record from './Record';
import Accounts from './Accounts'
import Budget from './Budget'

function Home() {
    return (
        <nav>
            <div className="logo">
                <img src={logo4} alt="Logo" />
                <h1>Money <font color="#66FF00">Matters</font></h1>
            </div>
            <ul id="links">
                <li><a href={Home}>Home</a></li>
                <li><a href={Record}>Record</a></li>
                <li><a href={Accounts}>Accounts</a></li>
                <li><a href={Budget}>Budget</a></li>
                <li><a href="App.js">Analysis</a></li>
            </ul>
        </nav>
    )
};

export default Home;