import React from "react";
import { ReactDOM } from "react";
import "/src/App.css";
import protoTypes from "prop-types"
function ReactactionIcons({retweet,onAction}) {
    function getRetweet(retweet) {
        if (retweet > 0) {
            return (
                <span>{ retweet}</span>
            )
        } else {
            return null
        }
    }
    return (
        <div className="reactionIcons">
            <div>
                <span>🔂</span>
           </div>
            <div>
                <span>🔁</span>
                {getRetweet(retweet)}
           </div>
            <div onClick={onAction}>
               {retweet >0 && <span>❤</span>}
           </div>
            <div>
                <span>...</span>
           </div>
        </div>
    )
}
ReactactionIcons.protoTypes = {
    retweet:protoTypes.string.isRequired
}





export default ReactactionIcons;