import React from "react"
import "../../CSS/Messages.css"
import {useSelector} from "react-redux"

const Messages = ({setMessagesShowing}) => {
    const messages = useSelector(state=>state.messages)
    const messagesList = messages.map(message => {
        return (
                <div className="individualMessageContainer">
                    <div className="msgImageContainer">
                        <img alt="user" className="msgImage" src={message.userImage}/>
                    </div>
                    <div className="msgMain">
                        <div className="msgName">{message.userName}</div>
                        <div className="msgPreview">{message.messages[0].content.substr(0, 20) + "..."}</div>
                    </div>
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
            <div className="thread">

            </div>
            <form onEnter={(e)=>{e.preventDefault()}} className="messagingForm">
                <input placeholder="...type your message here" className="messagingInput" type="text"></input>
                <button className="sendButton" type="submit"><i className="far fa-paper-plane"></i></button>
            </form>
        </div>
    </div>
    )
}
export default Messages