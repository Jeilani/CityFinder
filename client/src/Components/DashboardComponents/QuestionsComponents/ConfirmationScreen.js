import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {setQuestion} from "../../../actions"
import "../../../CSS/ConfirmationScreen.css"

const ConfirmationScreen = ({setQuestionPopUp}) => {
    const dispatch = useDispatch()
    const chosenQuestion = useSelector(state=>state.chosenQuestion)

    return (
        <div className="questionsPopUpContainer" onClick={()=>{setQuestionPopUp(false); dispatch(setQuestion(null))}}>
            <div className="confirmationPopUp" onClick={(e)=>e.stopPropagation} >
                <p>Awesome, you just started a conversation with {chosenQuestion.firstName} {chosenQuestion.lastName}. <br/>Go to the messages component to continue the conversation or start another chat here</p>
                <i className="fas fa-3x fa-check"></i>
            </div>
        </div>
    )
}

export default ConfirmationScreen