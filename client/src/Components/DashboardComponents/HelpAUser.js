import React, {useState} from "react"
import QuestionsPage from "./QuestionsPage"
import {useDispatch} from "react-redux"
import "../../CSS/HelpAUser.css"
import {setWhichDashboardPageToDashboard} from "../../actions"
import categories from "../../categories"

const HelpAUser = () => {
    const [whichHelpAUserPage, setWhichHelpAUserPage] = useState("Regular")
    const dispatch = useDispatch()
    const categoriesList = categories.map(({name, iconClassNames})=>{
        return (
            <li key={name} onClick={()=>setWhichHelpAUserPage(name)}><i className={`${iconClassNames} fa-2x`}></i>{name}</li>
        )
    })
    if (whichHelpAUserPage === "Regular"){
    return (
        <div className="HelpAUser">
            <div className="returnButton"><i  onClick={()=>{dispatch(setWhichDashboardPageToDashboard())}} className="fas fa-3x fa-arrow-circle-left"></i></div>
            <header className="HelpAUserTitle">Click on the category to answer questions in those categories in your city</header>
            <ul className="categoriesSection">
                {categoriesList}
            </ul>
        </div>
    )} else return <QuestionsPage setWhichHelpAUserPage={setWhichHelpAUserPage} whichQuestionsPage = {whichHelpAUserPage}/>
}

export default HelpAUser