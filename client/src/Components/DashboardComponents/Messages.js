import React from "react"
import "../../CSS/Messages.css"
import {mockMessages} from "../../DummyData"

const Messages = ({setMessagesShowing}) => {

    const messagesList = mockMessages.map(message => {
        return (
                <div className="individualMessageContainer">
                    <img className="msgImage" src={message.userImage}/>
                    <div className="msgPreview">{message.messages[0].content.substr(0, 20) + "..."}</div>
                </div>
            )

        })
    return (
    <div className="messages">
        <i onClick={()=>{setMessagesShowing(false)}} className="fas slidemessagesuparrow fa-2x fa-chevron-up"></i>
        <div className="messagesSection">
            <h3>Messages</h3>
            <div className="messageListContainer">
                {messagesList}
            </div>
        </div>
        <div className="conversationsSection">
            <h3>Conversation</h3>
        </div>
    </div>
    )
}
export default Messages