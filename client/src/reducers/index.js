import {combineReducers} from "redux"
import { mockMessages, mockPendingQuestions} from "../DummyData"


const messages = (state = mockMessages, action) =>{
    switch(action.type){
        case "ADD_MESSAGE":
            return [...state, action.payload]
        case "DELETE_MESSAGE":
            return [...state.filter(eachMessage=>eachMessage.messageId !== action.payload.messageId)]
        default:
            return state
    }
}

const pendingQuestions = (state = mockPendingQuestions, action) => {

    switch(action.type){
        case "ADD_QUESTION":
            return [state, action.payload]
        case "DELETE_QUESTION":
            return state.filter(eachQuestion=>eachQuestion.questionId !== action.payload.questionId)
        default:
            return state
    }
}


const chosenQuestion = (state = null, action) => {
    switch(action.type){
        case "UPDATE_QUESTION":
            return action.payload
        case "ERASE_QUESTION":
            return null
        default:
            return state
    }
}

const messagesShowing = (state= false, action) => {
    switch(action.type){
        case "SET_MESSAGES_SHOWING":
            return true
        case "SET_MESSAGES_HIDING":
            return false
        default:
            return state
    }
}

const whichDashboardPage = (state = "Dashboard", action) => {
    switch(action.type){
        case "SET_WHICH_DASHBOARD_PAGE_TO_HELP_A_USER":
            return "Help A User"
        case "SET_WHICH_DASHBOARD_PAGE_TO_BROWSE_AREA":
            return "Browse Area"
        case "SET_WHICH_DASHBOARD_PAGE_TO_DASHBOARD":
            return "Dashboard"
        default:
            return state
    }
}

const allReducers = combineReducers({
    messages,
    pendingQuestions,
    chosenQuestion,
    messagesShowing,
    whichDashboardPage
})

export default allReducers