import React from "react";
import { User } from "./User";


export function UsersList({ title, usersList }) {
    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {usersList.map((user, index)=> (
                    <User 
                        key={index}
                        user={user}
                    />
                ))}
            </ul>
        </div>
    )
}