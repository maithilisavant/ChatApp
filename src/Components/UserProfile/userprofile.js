import React from "react";
import "./userprofile.css";
import ProfileImg from "../../Assets/Images/profile1.jpg" ;


const UserProfile = (props) => {
  return (
    <div className="profile-container">
        <img src={ProfileImg} alt="user-profile" className="profile-image"></img>
    </div>
  );
};

export default UserProfile;