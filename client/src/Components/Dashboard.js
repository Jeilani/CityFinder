import React, {useState} from "react"
import "../CSS/Dashboard.css"
import BrowseArea from "./DashboardComponents/BrowseArea"
import HelpAUser from "./DashboardComponents/HelpAUser"
import Messages from "./DashboardComponents/Messages"

const Dashboard = props => {
    const [whichDashboardPage, setWhichDashboardPage] = useState("Dashboard")
    const [messagesShowing, setMessagesShowing] = useState(false)

    const handleMessagesSlideDown = () => {
        setMessagesShowing(true)
    }

    const showMessages = () =>{
        if (messagesShowing) return <Messages setMessagesShowing={setMessagesShowing}/>
    }

    if (whichDashboardPage === "Dashboard")
        return (
                    <div className="dashboard">
                        {showMessages()}
                        <i onClick={()=>props.setWhichPage("Login")}className="far logoutButton fa-3x fa-times-circle"></i>
                        <div className="bar" onClick={()=>{handleMessagesSlideDown()}}>
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="helpUser">
                            <h2>Help a user</h2>
                            <i className="fab fa-3x fa-searchengin"></i>
                        </div>
                        <div className="lookResidence">
                            <h2>Browse Area/Residence</h2>
                            <i className="fas fa-3x fa-key"></i>
                        </div>
                    </div>
        )
    else if (whichDashboardPage === "Browse Area") return <BrowseArea setWhichDashboardPage={setWhichDashboardPage}/>
    else if (whichDashboardPage === "Help A User") return <HelpAUser/>
}

export default Dashboard



