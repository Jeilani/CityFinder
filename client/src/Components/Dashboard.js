import React, {useState} from "react"
import {CSSTransition} from "react-transition-group"
import "../CSS/Dashboard.css"
import BrowseArea from "./DashboardComponents/BrowseArea"
import HelpAUser from "./DashboardComponents/HelpAUser"
import Messages from "./DashboardComponents/Messages"

const Dashboard = props => {
    const [dashboardPopUp, setDashboardPopUp] = useState(false)
    const [areaClickedIn, setAreaClickedIn] = useState(null)
    const [whichDashboardPage, setWhichDashboardPage] = useState("Dashboard")

    const renderPopUp = () => {
        if (dashboardPopUp){
            return (
            <div className="dashboardPopUp">
                <div className="innerPopUp">
                    <p>Do you want to go to the "{areaClickedIn}" page?</p>
                    <div className="buttonsContainer"><button onClick={()=>handlePopUpYes()}>Yes</button><button onClick={()=>{setDashboardPopUp(false); setAreaClickedIn(null)}}>No</button></div>
                </div>
            </div>)
        } else return null
    }

    const handlePopUpYes = () => {
        setWhichDashboardPage(areaClickedIn)
        console.log("whichDashboardPage is ")
        console.log(areaClickedIn)
    }

    if (whichDashboardPage === "Dashboard") {
        return (
            <CSSTransition
                in={(whichDashboardPage === "Dashboard")}
                timeout={800}
                classNames="dashboard-">
                    <div className="dashboard">
                        {renderPopUp()}
                        <i onClick={()=>props.setWhichPage("Login")}className="far logoutButton fa-3x fa-times-circle"></i>
                        <div className="bar" onClick={()=>{setDashboardPopUp(true); setAreaClickedIn("Messages")}}>
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="helpUser" onClick={()=>{setDashboardPopUp(true); setAreaClickedIn("Help A User")}}>
                            <h2>Help a user</h2>
                            <i className="fab fa-3x fa-searchengin"></i>
                        </div>
                        <div className="lookResidence" onClick={()=>{setDashboardPopUp(true); setAreaClickedIn("Browse Area")}}>
                            <h2>Browse Area/Residence</h2>
                            <i className="fas fa-3x fa-key"></i>
                        </div>
                    </div>
                    </CSSTransition>
                    )
                } else if (whichDashboardPage === "Messages") return <CSSTransition in={false} timeout={200}><Messages/></CSSTransition>
                else if (whichDashboardPage === "Help A User") return <CSSTransition in={false} timeout={200}><HelpAUser/></CSSTransition>
                else if (whichDashboardPage === "Browse Area") return <CSSTransition in={false} timeout={200}><BrowseArea setAreaClickedIn={setAreaClickedIn} setWhichDashboardPage = {setWhichDashboardPage}/></CSSTransition>
}

export default Dashboard



