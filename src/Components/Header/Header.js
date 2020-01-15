import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

export function Header() {
    return (
        <nav>
            <Link className="link" to="/">My Dating App</Link>
            <Link className="link" to="/login">Login</Link>
        </nav>      
    );
  }