import React, { useState } from "react";
import { Form } from "./Form"
import { useAction } from "../../Redux/action";
import { userActions } from "../../Redux/user";
import { loginUserServer } from "../../Data/dataManager";
import "./LoginPage.css";


export function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = useAction(userActions.loginUser);
    

    async function submitLoginForm() {
        const answerFromServer = await loginUserServer(username, password);
        if (answerFromServer) {
            loginUser(answerFromServer);
            return true;
        } 
        alert("User doesn't exist or password incorrect"); 
    };

    return (
        <Form title="Log in" buttonName="Login" onSubmit={submitLoginForm}> 
            <div className="formItem">
                User: 
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} required/>
            </div>
            <div className="formItem">
                Password: 
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
            </div>
        </Form>  
    );
}