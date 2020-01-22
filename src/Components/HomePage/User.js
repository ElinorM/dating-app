import React from "react";
import { useHistory } from "react-router-dom";

export function User({ user }) {
    const history = useHistory();
    const goToUserPage = () => history.push(`/user/${user.firstName}`);
    const { firstName, lastName, age, profilePic } = user;
    return (
        <li className="userContainer" onClick={goToUserPage}>
            <img src={profilePic} alt={"profile"}/>
            <div className="userDetails">
                <h6>{`${firstName} ${lastName}`}</h6>
                <h6>{age}</h6>
            </div>
                
        </li>
       
    )
}