import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getFakeUsersFromServer } from "../../Data/dataManager";
import { UsersList } from "./UsersList";
import "./HomePage.css";


export function HomePage() {
    const [recomendedUsers, setRecomendedUsers] = useState([]);
    const [recentlyJoinedUsers, setRecentlyJoinedUsers] = useState([]);
    const user = useSelector(({ user }) => user );
    const {username, lookingFor } = user;
    const loggedIn = username !== "";
    
    useEffect(() => {
        async function getUsers() {
            const fakeUsers = await getFakeUsersFromServer();
            setRecentlyJoinedUsers(fakeUsers.slice(0,10));
            setRecomendedUsers(fakeUsers.filter(user => lookingFor.includes(user.gender)));
        }
        getUsers();

    }, [lookingFor])


    return (
        <div className="homepage">
            {loggedIn ? 
                <div className="usersListContainer">
                    <UsersList title="Recommended for you:" usersList={recomendedUsers}/>
                    <UsersList title="Recently joined:" usersList={recentlyJoinedUsers}/>
                </div>
            :
                <h1>OMG, it’s the best dating app EVER!</h1>
            }
        </div>
    );
  }