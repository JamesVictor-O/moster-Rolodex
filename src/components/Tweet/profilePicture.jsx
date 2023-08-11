import React from "react";
import picture from "/src/assets/picture.png"
import '/src/App.css'
import { ReactDOM } from "react";

function ProfilePicture() {
    return (
        <div className="profilePics">
            <img
                src={picture}
                width= "60px"
             />
       </div>
   ) 
}
export default ProfilePicture;

