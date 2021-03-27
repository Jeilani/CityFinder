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