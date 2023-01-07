import { DISPLAY_ALERT } from "./actions"

const reducer = (state, action) => {
    if (action.tyoe)
    throw new Error(`no such action : ${action.type}`)
}

export default reducer