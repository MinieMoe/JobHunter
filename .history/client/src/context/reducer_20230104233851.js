import { DISPLAY_ALERT } from "./actions"

const reducer = (state, action) => {
    //'state' here is the 'initialState' passed inside useReducer() from appContext.js
    
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