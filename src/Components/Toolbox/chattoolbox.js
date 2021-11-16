import React from "react";
import "./chattoolbox.css";
import {AttachFile,EmojiEmotions, Send} from '@material-ui/icons';

const Toolbox = (props) => {
  return (
    <div className="toolbox-container">
        <div className="attachments">
            <AttachFile></AttachFile>
        </div>
        <div className="emoji-icon">
            <EmojiEmotions></EmojiEmotions>
        </div>

        <div className="chatInputWrapper">
          <form>
            <input className="textarea input" type="text" placeholder="Enter your message..."/>
          </form>
        </div>
        
        <div className="send-button">
            {/* <button type="submit" value="send">Send</button> */}
            <Send> </Send>
        </div>
    </div>
  );
};

export default Toolbox;