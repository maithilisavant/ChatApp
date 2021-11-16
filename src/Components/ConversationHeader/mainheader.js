import React from "react";
import "./mainheader.css";
import {Menu, Search, MoreVert} from '@material-ui/icons';

const MainHeader = (props) => {
  return (
    <div className="header-container">
        <Menu className="menu-icon"></Menu>
        <div className="search-container">
            <form>
                <input className="textarea search" type="text" placeholder="Search"/>
            </form>
            <Search className="search-icon"> </Search>  
        </div>
        <MoreVert className="more-icon"></MoreVert>
    </div>
  );
};

export default MainHeader;