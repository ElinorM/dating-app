import React from "react";
import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginForm";
import "./LoginPage.css";


export function LoginPage() {
    return (
        <div className="formsContainer" >
            <RegisterForm />
            <LoginForm />
        </div>
        
    );
}