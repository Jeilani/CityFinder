import React, {useState} from "react"
import "../CSS/Dashboard.css"

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
                    <div className="buttonsContainer"><button>Yes</button><button onClick={()=>{setDashboardPopUp(false); setAreaClickedIn(null)}}>No</button></div>
                </div>
            </div>)
        } else return null
    }

    const renderDashboard = () => {
        if (whichDashboardPage === "Dashboard")
        return (
            <div className="dashboard">
                {renderPopUp()}
                <i onClick={()=>props.setWhichPage("Login")}className="fas logoutButton fa-3x fa-sign-out-alt"></i>
                <div className="bar" onClick={()=>{setDashboardPopUp(true); setAreaClickedIn("Messages")}}>
                    <i className="fas fa-bell"></i>
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
        )
    }
    return renderDashboard()
}

export default Dashboard