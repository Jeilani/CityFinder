import React from "react"
import "../../../CSS/ChosenMarker.css"

const ChosenMarker = ({map, data, setChosenMarker}) => {
    const renderImage = () => {
            if (data.photos) return <img src={data.photos[0].getUrl()} alt="clicked marker"/>
            else return <img src={data.icon} alt="type icon"/>
    }

    return (
        <div className="chosenMarkerContainer" onClick={()=>setChosenMarker(null)}>
            <div className="chosenMarkerPopUp" onClick={(e)=>e.stopPropagation()}>
                {renderImage()}
                <h2>{data.name}</h2>
                <h4>{data.address}</h4>
                <div>
                <button>Ask a question about this to people in the area?</button>
            </div>
            </div>
        </div>
    )
}

export default ChosenMarker