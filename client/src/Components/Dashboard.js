import React, {useState} from "react"
import "../CSS/Dashboard.css"
import BrowseArea from "./DashboardComponents/BrowseArea"
import HelpAUser from "./DashboardComponents/HelpAUser"
import Messages from "./DashboardComponents/Messages"

const Dashboard = ({setWhichPage}) => {
    const [whichDashboardPage, setWhichDashboardPage] = useState("Dashboard")
    const [messagesShowing, setMessagesShowing] = useState(false)

    const handleMessagesSlideDown = () => {
        setMessagesShowing(true)
    }

    const showMessages = () => {
        if (messagesShowing) return <Messages setMessagesShowing={setMessagesShowing}/>
    }

    console.log("dashbaord is mounted")

    if (whichDashboardPage === "Dashboard")
        return (
                    <div className="dashboard">
                        {showMessages()}
                        <i onClick={(e)=>{e.preventDefault();setWhichPage("")}}className="far logoutButton fa-3x fa-times-circle"></i>
                        <div className="bar" onClick={()=>{handleMessagesSlideDown()}}>
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="helpUser" onClick={()=>{setWhichDashboardPage("Help A User")}}>
                            <h2>Help a user</h2>
                            <i className="fab fa-3x fa-searchengin"></i>
                        </div>
                        <div className="lookResidence" onClick={()=>{setWhichDashboardPage("Browse Area")}}>
                            <h2>Browse Area/Residence</h2>
                            <i className="fas fa-3x fa-key"></i>
                        </div>
                    </div>
        )
    else if (whichDashboardPage === "Browse Area") return <BrowseArea setWhichDashboardPage={setWhichDashboardPage}/>
    else if (whichDashboardPage === "Help A User") return <HelpAUser setWhichDashboardPage={setWhichDashboardPage}/>
}

export default Dashboard



