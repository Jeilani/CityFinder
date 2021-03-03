import React from 'react'
import "../../CSS/QuestionsPage.css"
import NightLifeImage from "../../images/HelpAUserImages/HelpAUserNightlife.jpg"
import ParksImage from "../../images/HelpAUserImages//HelpAUserBasketballCourt.jpg"
import ApartmentImage from "../../images/HelpAUserImages/HelpAUserApartment.jpg"
import OutdoorsImage from "../../images/HelpAUserImages/HelpAUserOutdoors.jpg"
import TouristAttraction from "../../images/HelpAUserImages/HelpAUserTajMahal.jpg"

const QuestionsPage = ({whichQuestionsPage}) => {

    let backgroundPic;

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
        <div className="questionsPageContainer" style={{backgroundImage: backgroundPic}}>
            <div>Here are all the questions about {whichQuestionsPage}</div>
            <div></div>
        </div>
    )
}

export default QuestionsPage