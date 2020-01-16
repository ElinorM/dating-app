import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css"

export function Header() {
    const username = useSelector(({ user }) => user.username );
    const loggedIn = username !== ""; 

    const getLoginLinkOrUsernam = () => {
        return loggedIn 
            ? <h4>{`Hello, ${username}`}</h4>
            : <Link className="link" to="/login">Login</Link>
    }
    
    return (
        <nav>
            <Link className="link" to="/">My Dating App</Link>
            {getLoginLinkOrUsernam()}
        </nav>      
    );
  }