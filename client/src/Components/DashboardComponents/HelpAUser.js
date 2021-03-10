import React, {useState} from "react"
import QuestionsPage from "./QuestionsPage"
import "../../CSS/HelpAUser.css"

const HelpAUser = ({setWhichDashboardPage}) => {
    const [whichHelpAUserPage, setWhichHelpAUserPage] = useState("Regular")

    if (whichHelpAUserPage === "Regular"){
    return (
        <div className="HelpAUser">
            <div className="returnButton"><i  onClick={()=>{setWhichDashboardPage("Dashboard")}} className="fas fa-3x fa-arrow-circle-left"></i></div>
            <header className="HelpAUserTitle">Click on the category to answer questions in those categories in your city</header>
            <ul className="categoriesSection">
                <li onClick={()=>setWhichHelpAUserPage("Apartment")}><i className="far fa-2x fa-building"></i>Apartment</li>
                <li onClick={()=>setWhichHelpAUserPage("Tourist Attractions")}><i className="fas fa-2x fa-binoculars"></i>Tourist Attractions</li>
                <li onClick={()=>setWhichHelpAUserPage("Outdoors")}><i className="fas fa-2x fa-hiking"></i>Outdoors</li>
                <li onClick={()=>setWhichHelpAUserPage("Parks")}><i className="fas fa-2x fa-tree"></i>Parks</li>
                <li onClick={()=>setWhichHelpAUserPage("NightLife")}><i className="fas fa-2x fa-cocktail"></i>Nightlife</li>
                <li>All</li>
            </ul>
        </div>
    )} else return <QuestionsPage setWhichHelpAUserPage={setWhichHelpAUserPage} whichQuestionsPage = {whichHelpAUserPage}/>
}

export default HelpAUser