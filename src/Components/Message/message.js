import React from "react";
import "./message-left.css";
import "./message-right.css";


const MessageTemplate = (props) => {
    return (
      <div>
        <div className="message-container message-container-left">
        <div className="message-block message-block-left">The message text is for example -Left The message text is for example -Left The message text is for example -LeftThe message text is for example -Left The message text is for example -Left The message text is for example -LeftThe message text is for example -Left The message text is for example -Left The message text is for example -Left</div>
      </div>
      <div className="message-container message-container-right">
        <div className="message-block message-block-right">The message text - Right</div>
      </div>
      </div>
    );
  };

export default MessageTemplate;