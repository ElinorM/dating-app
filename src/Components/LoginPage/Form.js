import React from "react";
import { useHistory } from "react-router-dom";
import "./Form.css";

export function Form({ title, buttonName, onSubmit, children }) {
    const history = useHistory();
    const goToHomePage = () => history.push("/");
    
    async function submitUser(e) {
        e && e.preventDefault();
        const isValid = await onSubmit();
        isValid && goToHomePage();
    }

    return (
        <form onSubmit={submitUser}>
            <div className="formHeader">
                <h2>{title}</h2>
            </div>
            {children}
            <div className="formButton">
                <button>{buttonName}</button>
            </div>
        </form>
    );
  }