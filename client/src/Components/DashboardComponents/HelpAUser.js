import React from "react"
import "../../CSS/HelpAUser.css"

const HelpAUser = ({setWhichDashboardPage}) => {
    return (
        <div className="HelpAUser">
            <div className="returnButton"><i  onClick={()=>{setWhichDashboardPage("Dashboard")}} className="fas fa-3x fa-arrow-circle-left"></i></div>
            <header className="HelpAUserTitle">Click on the category to answer questions in those categories in your city</header>
            <ul className="categoriesSection">f
                <li><i className="fas fa-binoculars"></i>Tourist Attractions</li>
                <li><i className="fas fa-hiking"></i>Outdoors</li>
                <li><i className="fas fa-tree"></i>Parks</li>
                <li><i className="fas fa-cocktail"></i>Nightlife</li>
                <li>All</li>
            </ul>
        </div>
    )
}

export default HelpAUser