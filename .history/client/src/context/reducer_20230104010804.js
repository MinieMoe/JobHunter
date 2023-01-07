import { DISPLAY_ALERT } from "./actions"

const reducer = (state, action) => {
    if (action.type === DISPLAY_ALERT){
        return {...state, showAlert:true, aer}
    }
    throw new Error(`no such action : ${action.type}`)
}

export default reducer