import React from "react"
import "../../CSS/Messages.css"

const Messages = ({setMessagesShowing}) => {
    return (
    <div className="messages">
        <i onClick={()=>{setMessagesShowing(false)}} className="fas slidemessagesuparrow fa-2x fa-chevron-up"></i>
    </div>)
}
export default Messages