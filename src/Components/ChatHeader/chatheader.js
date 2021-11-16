import React from "react";
import "../UserName/username.css";
import "./chatheader.css";

import UserProfile from "../UserProfile/userprofile"
import {Videocam, Call, MoreVert} from '@material-ui/icons';

const HeaderProfile = (props) => {
  return (
    <div className="chat-header-block">
        <UserProfile></UserProfile>
        <div className="inner-block">
            <div className="user-name">Naruto Uzumaki</div>
        </div>
        <div className="right-block">
          <Call></Call>
          <Videocam></Videocam>
          <MoreVert></MoreVert>
        </div>
        
    </div>
  );
};

export default HeaderProfile;