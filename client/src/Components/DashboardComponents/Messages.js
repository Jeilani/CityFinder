import React, {useState} from "react"
import "../../CSS/Messages.css"
import {useSelector, useDispatch} from "react-redux"
import {setMessagesHiding} from "../../actions"

const Messages = () => {
    const dispatch = useDispatch()
    const messages = useSelector(state=>state.messages)
    const [whichMessageClicked, setWhichMessageClicked] = useState(messages[0])
    const [hidingActive, setHidingActive] = useState(false)
    const handleMessageClick = (message) => {
        setWhichMessageClicked(message)
    }
    const exitMessages = () => {
        setHidingActive(true)
        setTimeout(()=>{
            dispatch(setMessagesHiding())
        }, 300)

    }
    const messagesList = messages.map(message => {
        return (
                <div className={`individualMessageContainer ${message.messageId === whichMessageClicked.messageId? 'clickedMessage':null}`} onClick={()=>handleMessageClick(message)}>
                    <div className="msgImageContainer">
                        <img alt="user" className="msgImage" src={message.userImage}/>
                    </div>
                    <div className="msgMain">
                        <div className={`${message.messageId === whichMessageClicked.messageId?'clickedmsgName':'msgName'}`}>{message.userName}</div>
                        <div className="msgPreview">{message.messages[0].content.substr(0, 20) + "..."}</div>
                    </div>
                </div>
            )

        })

    if (hidingActive) {
        return (
            <div className="hideMessages">
                <i className="fas fa-envelope"></i>
            </div>
        )
    } else {
        return (
            <div className="messages">
                <i onClick={()=>exitMessages()} className="fas slidemessagesuparrow fa-2x fa-chevron-up"></i>
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

}
export default Messages