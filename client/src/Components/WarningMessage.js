import React from "react"
import "../CSS/WarningMessage.css"

const WarningMessage = ({message}) => {
    return (
        <div className="WarningMessageContainer">
            <figure className="WarningMessage">
                <figcaption>{message}</figcaption>
                <i className="fas fa-exclamation-circle"></i>
            </figure>
        </div>
                )
}

export default WarningMessage