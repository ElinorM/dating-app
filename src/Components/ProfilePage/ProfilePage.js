import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form } from "../Form/Form";
import { useAction } from "../../Redux/action";
import { userActions } from "../../Redux/user";
import { updateProfileServer } from "../../Data/dataManager";
import "./ProfilePage.css";

export function ProfilePage() {
    const user = useSelector(({ user }) => user );
    const [name, setName] = useState(user.name);
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender);
    const [lookingFor, setLookingFor] = useState(user.lookingFor);
    const saveUser = useAction(userActions.saveUser);

    async function submitProfileForm() {
        const answerFromServer = await updateProfileServer(user.username, name, age, gender, lookingFor);
        saveUser(answerFromServer);
        return true;
    }

    return (
        <div className="formContainer"> 
            <Form title="" buttonName="Save" buttonClassName="profileButton" onSubmit={submitProfileForm}> 
                <div className="formItem">
                    Name: 
                    <input type="text" value={name} onChange={e => setName(e.target.value)} required/>
                </div>
                <div className="formItem">
                    Age: 
                    <input type="number" value={age} onChange={e => setAge(e.target.value)} required/>
                </div>
                <div className="formItem">
                    Gender: 
                    <select value={gender} onChange={e => setGender(e.target.value)} required>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div className="formItem">
                    Looking for: 
                    <select value={lookingFor} onChange={e => setLookingFor(e.target.value)} required>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Male&Female</option>
                    </select>
                </div>
            </Form>
        </div>
    )
}