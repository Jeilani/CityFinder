import React, {useState} from 'react'
import "../../CSS/QuestionsPage.css"
import NightLifeImage from "../../images/HelpAUserImages/HelpAUserNightlife.jpg"
import ParksImage from "../../images/HelpAUserImages//HelpAUserBasketballCourt.jpg"
import ApartmentImage from "../../images/HelpAUserImages/HelpAUserApartment.jpg"
import OutdoorsImage from "../../images/HelpAUserImages/HelpAUserOutdoors.jpg"
import TouristAttraction from "../../images/HelpAUserImages/HelpAUserTajMahal.jpg"
import {useSelector, useDispatch} from "react-redux"
import {setQuestion} from "../../actions"
import QuestionsPopUp from "./QuestionsComponents/QuestionsPopUp"

const QuestionsPage = ({whichQuestionsPage, setWhichHelpAUserPage}) => {
    const dispatch = useDispatch()
    const [questionPopUp, setQuestionPopUp] = useState(false)
    const pendingQuestions = useSelector(state=>state.pendingQuestions)
    const questionsList = pendingQuestions.map(eachQuestion => {
        return (
            <div key = {eachQuestion.questionId} className="individualQuestion" onClick={()=>{dispatch(setQuestion(eachQuestion)); setQuestionPopUp(true); }}>
                <div>{eachQuestion.firstName} {eachQuestion.lastName}</div>
                <img alt="user profile" src={eachQuestion.profileImg}/>
                <div className='individualQuestionTitle'>{eachQuestion.title.substring(0, 60)} ...</div>
            </div>
        )
    })

    let backgroundPic
    //switch statement below is determining what the above backgroundPic should be based on what category of questins was clicked
    switch(whichQuestionsPage){
        case "Apartment":
            backgroundPic = ApartmentImage
            break;
        case "NightLife":
            backgroundPic = NightLifeImage
            break;
        case "Tourist Attractions":
            backgroundPic = TouristAttraction
            break;
        case "Outdoors":
            backgroundPic = OutdoorsImage
            break;
        case "Parks":
            backgroundPic = ParksImage
            break;
        default: backgroundPic = ApartmentImage
    }

    return (
        <div className="questionsPageContainer" style={{background: `linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .1)), url(${backgroundPic}`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            {questionPopUp?<QuestionsPopUp setQuestionPopUp={setQuestionPopUp}/>:null}
            <div className="questionsPageHeader">
                <h1>Here are all the questions about {whichQuestionsPage.toLowerCase()} in your area</h1>
                <h3>Click on one's that interest you to start a conversation and make a friend</h3>
            </div>
            <div className="individualQuestionsContainer">
                {questionsList}
            </div>
            <div className="returnButton returnButtonQuestionsPage"><i onClick={()=>{setWhichHelpAUserPage("Regular")}} className="fas fa-3x fa-arrow-circle-left"></i></div>
        </div>
    )
}

export default QuestionsPage