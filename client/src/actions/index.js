export const addMessage = whichMessage => {
    return {
        type: "ADD_MESSAGE",
        payload: whichMessage
    }
}

 export const deleteQuestion = whichQuestion => {
     return {
         type: "DELETE_QUESTION",
         payload: whichQuestion
     }
 }

 export const setQuestion = whichQuestion => {
     return {
         type: "UPDATE_QUESTION",
         payload: whichQuestion
     }
 }

 export const setMessagesShowing = () => {
     return {
         type: "SET_MESSAGES_SHOWING"
     }
 }

 export const setMessagesHiding = () => {
     return {
         type: "SET_MESSAGES_HIDING"
     }
 }

 export const setWhichDashboardPageToHelpAUser = () => {
     return {
         type: "SET_WHICH_DASHBOARD_PAGE_TO_HELP_A_USER"
     }
 }

 export const setWhichDashboardPageToBrowseArea = () => {
     return {
         type: "SET_WHICH_DASHBOARD_PAGE_TO_BROWSE_AREA"
     }
 }
 
 export const setWhichDashboardPageToDashboard = () => {
     return {
         type: "SET_WHICH_DASHBOARD_PAGE_TO_DASHBOARD"
     }
 }