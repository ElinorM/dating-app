import React from "react";
import { Form } from "./Form"
import { useAction } from "../../Redux/action";
import { userActions } from "../../Redux/user"
import "./LoginPage.css"


export function LoginPage() {
    const registerUser = useAction(userActions.registerUser);
    const loginUser = useAction(userActions.loginUser)

    return (
        <div className="formsContainer" >
            <Form title="New User" buttonName="Register" onSubmit={registerUser}/>
            <Form title="Log in" buttonName="Login" onSubmit={loginUser}/>
        </div>
        
    );
}