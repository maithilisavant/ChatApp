import React, {Component} from "react";
import "../App.css";
import "./chatscreen.css";
import axios from "axios";
import Conversation from "../Components/UserName/username";
import HeaderProfile from "../Components/ChatHeader/chatheader";
import Toolbox from "../Components/Toolbox/chattoolbox";
import MainHeader from "../Components/ConversationHeader/mainheader";

import Message from "../Components/Message/message";

class ChatScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
          users: "",
          currentchat: ""
        };
      }
    
      componentDidMount() {
        // this.callApi();
      }

      render() {
        return (
          <div className="chat-page-container">
            <div className="left-chat-container">
                <div className="conversation-header">
                  <MainHeader></MainHeader>
                </div>
                <div className="conversation-tab">
                  <Conversation> </Conversation>
                  
                </div>
            </div>
            <div className="right-chat-container">
                <div className="chat-header">
                  <HeaderProfile></HeaderProfile>
                </div>
                <div className="chat-tab">
                  <Message></Message>
                </div>
                <div className="chat-toolbox">
                  <Toolbox></Toolbox>
                </div>
            </div>
          </div>  
        );
    }
}
export default ChatScreen;
