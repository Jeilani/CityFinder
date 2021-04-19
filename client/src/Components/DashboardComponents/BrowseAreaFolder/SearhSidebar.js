import React from "react"
import {setWhichDashboardPageToDashboard} from "../../actions"
import {useDispatch} from "react-redux"

const SearchSidebar = () => {
    const dispatch = useDispatch()
    return (
        <div className="searchSideBar">
        <div className="returnButton"><i  onClick={()=>{dispatch(setWhichDashboardPageToDashboard())}} className="fas fa-3x fa-arrow-circle-left"></i></div>
        <form>
            <input className="searchInput" type="input" placeholder="Search apartment/city"></input>
        </form>

        <p className="clickInformational"><i className="fas fa-info-circle"></i>Click on an area or an apartment to ask questions to residents</p>
      </div>
    )
}

export default SearchSidebar