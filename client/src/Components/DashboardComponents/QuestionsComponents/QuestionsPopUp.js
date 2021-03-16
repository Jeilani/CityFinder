import React, {useState} from "react"
import "../../../CSS/QuestionsPopUp.css"

const automatedResponse = ["I can definitely help you", "I would love to talk about this", "I can answer this question for you"]


const QuestionsPopUp = ({chosenQuestion, setWhichQuestion, setQuestionPopUp}) => {
    const [response, setResponse] = useState("")
    const responses = automatedResponse.map((str, i) =><span onClick={()=>handleResponseClick(i)} className="automatedResponse">{str}</span>)
    const handleExitClick = () => {
        setQuestionPopUp(false)
        setWhichQuestion(null)
    }

    const handlePopUpClick = (e) => {
        e.stopPropagation()
    }

    const handleResponseClick = num => {
        setResponse(automatedResponse[num])
    }


    const handleInputChange = e => {
       setResponse(e.target.value)
    }

    return (
        <div className="questionsPopUpContainer" onClick={handleExitClick}>
            <div className="questionsPopUp" onClick={handlePopUpClick}>
                <div className="questionsContentContainer">
                    <img className="headshot questionsPopUpHeadshot"   src={chosenQuestion.profileImg} alt="headshot"/>
                    <div className="name">{chosenQuestion.firstName} {chosenQuestion.lastName}</div>
                    <p className="userText">{chosenQuestion.title}</p>
                    <p>You can choose one of our automated responses to get the chat going or type your own</p>
                    <div className="automatedResponsesContainer">
                        {responses}
                    </div>
                    <form onSubmit={()=>alert("submit working")}>
                        <input value={response}onChange={handleInputChange} onEnter={()=>alert("working")} placeholder="...type your response here and press enter when you're ready to send"></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default QuestionsPopUp