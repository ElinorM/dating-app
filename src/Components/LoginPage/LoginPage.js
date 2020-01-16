import React from "react";
import { Form } from "./Form"
import "./LoginPage.css"


export function LoginPage() {
    return (
        <div className="formsContainer" >
            <Form title="New User" buttonName="Register"/>
            <Form title="Log in" buttonName="Login" />
        </div>
        
    );
}