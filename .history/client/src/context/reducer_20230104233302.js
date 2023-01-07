import { DISPLAY_ALERT } from "./actions"

const reducer = (state, action) => {
    //state here is the state passed from appContext
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