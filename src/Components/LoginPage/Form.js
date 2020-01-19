import React, { useState } from "react";
import "./Form.css";

export function Form({ title, buttonName, onSubmit }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitUser = e => {
        e && e.preventDefault();
        onSubmit({username, password});
        setUsername("");  
        setPassword(""); 
    }

    return (
        <form onSubmit={submitUser}>
            <div className="formHeader">
                <h2>{title}</h2>
            </div>
            <div className="formItem">
                User: 
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} required/>
            </div>
            <div className="formItem">
                Password: 
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
            </div>
            <div className="formButton">
                <button>{buttonName}</button>
            </div>
        </form>
    );
  }