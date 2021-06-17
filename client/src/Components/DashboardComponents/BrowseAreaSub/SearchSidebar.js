import React from "react"
import {setWhichDashboardPageToDashboard} from "../../../actions"
import {useDispatch} from "react-redux"
import "../../../CSS/SearchSidebar.css"
import categories from "../../../categories"
import Search from "./Search"

const SearchSidebar = ({whichCategory, searchCategoriesNearby, panTo}) => {
    const dispatch = useDispatch()
    const categoriesList = categories.map(({name, iconClassNames})=>{
        let isCategory = name === whichCategory
        return (
            <li className={`${isCategory?'clickedCategory':'notClickedCategory'}`}key={name} onClick={()=>{searchCategoriesNearby(name)}}><i className={`${iconClassNames}`}></i>{name}</li>
        )
    })

    return (
        <div className="searchSideBar">
        <div className="returnButton"><i  onClick={()=>{dispatch(setWhichDashboardPageToDashboard())}} className="fas fa-3x fa-arrow-circle-left"></i></div>
        <Search panTo={panTo}/>
        <ul className="categoriesContainer">
            {categoriesList}
        </ul>
        <p className="clickInformational"><i className="fas fa-info-circle"></i>Click on an area or an apartment to ask questions to residents</p>
      </div>
    )
}

export default SearchSidebar