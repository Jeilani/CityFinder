import React from "react"
import {useSelector, useDispatch} from "react-redux"
import "../CSS/Dashboard.css"
import BrowseArea from "./DashboardComponents/BrowseArea"
import HelpAUser from "./DashboardComponents/HelpAUser"
import Messages from "./DashboardComponents/Messages"
import {setMessagesShowing, setWhichDashboardPageToBrowseArea, setWhichDashboardPageToHelpAUser} from "../actions"

const Dashboard = ({setWhichPage}) => {
    const dispatch = useDispatch()
    const whichDashboardPage = useSelector(state=>state.whichDashboardPage)
    const messagesShowing = useSelector(state=>state.messagesShowing)

    const handleMessagesSlideDown = () => {
        dispatch(setMessagesShowing())
    }

    const showMessages = () => {
        if (messagesShowing) return <Messages/>
    }

    if (whichDashboardPage === "Dashboard")
        return (
                    <div className="dashboard">
                        {showMessages()}
                        <i onClick={(e)=>{e.preventDefault();setWhichPage("Login")}}className="far logoutButton fa-3x fa-times-circle"></i>
                        <div className="bar" onClick={()=>{handleMessagesSlideDown()}}>
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="helpUser" onClick={()=>dispatch(setWhichDashboardPageToHelpAUser())}>
                            <h2>Help a user</h2>
                            <i className="fab fa-3x fa-searchengin"></i>
                        </div>
                        <div className="lookResidence" onClick={()=>dispatch(setWhichDashboardPageToBrowseArea())}>
                            <h2>Browse Area/Residence</h2>
                            <i className="fas fa-3x fa-key"></i>
                        </div>
                    </div>
        )
    else if (whichDashboardPage === "Browse Area") return <BrowseArea/>
    else if (whichDashboardPage === "Help A User") return <HelpAUser/>
}

export default Dashboard



