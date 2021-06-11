import React from 'react';
import {Link} from 'react-router-dom';

let link = {
    color: "white",
    TextDecoder: "none",
    backgroundColor: "blue",
    padding: "7px",
    borderRadius: "5px",
    fontSize: "20px",
    fontStyle: "bold",
    margin: "20px"  
}

const Navbar = () => {
    return(
        <div>
        <nav style={{backgroundColor: "crimson", padding: "30px"}}>
        <Link style={link} to="/"> Home </Link>
        <Link style={link} to="/about">About</Link>
        <Link style={link} to="/contact">Contact</Link>
        </nav>
        </div>
    )
}
export default Navbar;