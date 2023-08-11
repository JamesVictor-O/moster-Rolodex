import React from "react";
import { ReactDOM } from "react";
import "/src/App.css"

function NameWithHandle({myname}) {
    return (
     <span className="nameHandle">
            <span className="name">James { myname}</span>  
        <span className="handle">@codeXjames</span>  
     </span>
    )
}

export default NameWithHandle;