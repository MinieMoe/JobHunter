import { DISPLAY_ALERT } from "./actions"

const reducer = (state, action) => {
    if (action.type === DISPLAY_ALERT){
        return {...state, showAlert:true, alertType:'danger',alertText:''}
    }
    throw new Error(`no such action : ${action.type}`)
}

export default reducer