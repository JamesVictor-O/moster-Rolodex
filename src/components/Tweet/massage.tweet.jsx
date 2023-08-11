import React from "react";
import { ReactDOM } from "react";
import "/src/App.css"

function Message({massage}) {
    let isMass = true;
    let { firstMessage,secondMessage } = massage; 
    return (
        <div className="message">
            { isMass && firstMessage}😊❤
         </div>
    )
}
export default Message;