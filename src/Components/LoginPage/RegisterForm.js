import React, { useState } from "react";
import { Form } from "../Form/Form"
import { useAction } from "../../Redux/action";
import { userActions } from "../../Redux/user";
import { registerUserServer } from "../../Data/dataManager";
import "./LoginPage.css";


export function RegisterForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const saveUser = useAction(userActions.saveUser);
      
    async function submitRegisterForm() {
        if (password !== confirmPassword) {
            alert("Passwords not match, please re-enter");
        } else {
            const answerFromServer = await registerUserServer(username, password); 
            if (answerFromServer) {
                saveUser(answerFromServer);
                return true;
            } 
            alert("User exist"); 
        }        
    };


    return (
        <Form title="New User" buttonName="Register" onSubmit={submitRegisterForm}>
            <div className="formItem">
                User: 
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} required/>
            </div>
            <div className="formItem">
                Password: 
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
            </div>
            <div className="formItem">
                Password: 
                <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required/>
            </div>
        </Form>
        
    );
}