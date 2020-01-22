import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFakeUsersFromServer } from "../../Data/dataManager";
import "./UserPage.css";

export function UserPage() {
    const { name } = useParams();
    const [user, setUser] = useState({});
    const [currentImage, setCurrentImage] = useState("");
    const himOrHer = (user.gender === "female") ? "her" : "him";

    
    useEffect(() => {
        async function getUser() {
            const fakeUsers = await getFakeUsersFromServer();
            const fakeUser = fakeUsers.find(user => user.firstName === name)
            setUser(fakeUser);
            setCurrentImage(fakeUser.images[0])
        }
        getUser();
    }, [name])

    const { firstName, lastName, images, age} = user;

    const showNextImg = () => {
        const currentImgIndex = images.indexOf(currentImage);
        setCurrentImage(images[(currentImgIndex+1)%images.length])

    }

    const showPrevImg = () => {
        const currentImgIndex = images.indexOf(currentImage);
        setCurrentImage(images[(currentImgIndex-1+images.length)%images.length])
    }
    
    return (
        <div className="userpage">
            <div className="userProfileContainer">
                <div className="buttonsAndImageContainer">
                    <button className="arrowLeft" onClick={showPrevImg}/>
                    <img className="userImage" src={currentImage} alt={"profile"}/>
                    <button className="arrowRight" onClick={showNextImg}/>
                </div>
                <h3>{`${firstName} ${lastName}`}</h3>
                <h3>{age}</h3>
                <button>{`I like ${himOrHer}`}</button>
                <div className="checkbox"><input className="checkboxInput" type="checkbox"  value=""/>Is a creep</div>
            </div>  
        </div>
    )
}