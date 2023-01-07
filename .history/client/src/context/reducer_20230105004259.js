import { DISPLAY_ALERT, CLEAR_ALERT } from "./actions"

const reducer = (state, action) => {
    //'state' here is the 'initialState' passed inside useReducer() from appContext.js
    //'state' is the current state, 'state' will be changed based on action.type

    if (action.type === DISPLAY_ALERT){
        return {
            ...state,
            showAlert:true, 
            alertType:'danger',
            alertText:'Please provide all values!',
        }
    }
    if (action.type === DISPLAY_ALERT){
        return {
            ...state,
            showAlert:true, 
            alertType:'danger',
            alertText:'Please provide all values!',
        }
    }
    throw new Error(`no such action : ${action.type}`)
}

export default reducer