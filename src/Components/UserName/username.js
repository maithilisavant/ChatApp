import React from "react";
import "./username.css";
import UserProfile from "../UserProfile/userprofile"


const ProfileContainer = (props) => {
  return (
    <div className="conversation-block">
        <UserProfile></UserProfile>
        <div className="inner-block">
            <div className="user-name">Naruto Uzumaki</div>
            <div className="recent-text">Let's go eat Ramen</div>
        </div>
    </div>
  );
};

export default ProfileContainer;