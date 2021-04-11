import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {setMessagesShowing, setQuestion, setWhichDashboardPageToDashboard} from "../../../actions"
import "../../../CSS/ConfirmationScreen.css"

const ConfirmationScreen = ({setQuestionPopUp}) => {
    const dispatch = useDispatch()
    const chosenQuestion = useSelector(state=>state.chosenQuestion)

    const handleConfirmationScreenExit = () => {
        setQuestionPopUp(false);
        dispatch(setQuestion(null))
        dispatch(setWhichDashboardPageToDashboard())
        dispatch(setMessagesShowing())

    }
    return (
        <div className="questionsPopUpContainer" onClick={()=>handleConfirmationScreenExit()}>
            <div className="confirmationPopUp" onClick={(e)=>e.stopPropagation} >
                <p>Awesome, you just started a conversation with {chosenQuestion.firstName} {chosenQuestion.lastName}. <br/>Go to the messages component to continue the conversation or start another chat here</p>
                <i className="fas fa-3x fa-check"></i>
            </div>
        </div>
    )
}

export default ConfirmationScreen