import React from "react"
import "../CSS/Dashboard.css"

const Dashboard = props => {
    return (
        <div className="dashboard">
            <i onClick={()=>props.setWhichPage("Login")}className="fas logoutButton fa-3x fa-sign-out-alt"></i>
            <div className="bar">
                <i className="fas fa-bell"></i>
            </div>
            <div className="helpUser">
                <h2>Help a user</h2>
                <i className="fab fa-3x fa-searchengin"></i>
            </div>
            <div className="lookResidence">
                <h2>Look for residence</h2>
                <i className="fas fa-3x fa-key"></i>
            </div>
        </div>
    )
}

export default Dashboard