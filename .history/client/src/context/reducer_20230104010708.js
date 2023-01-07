import { DISPLAY_ALERT } from "./action"
const reducer = (state, action) => {
    throw new Error(`no such action : ${action.type}`)
}

export default reducer