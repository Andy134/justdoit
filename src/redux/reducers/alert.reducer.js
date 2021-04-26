import { alertConstant, alertSeverity } from "../../constants/alert.constants"

const initState = {
    show: false,
    severity: alertSeverity.Error,
    message: null
}

export function alert(state = initState, action) {
    console.log(state)
    const { severity, message } = action
    switch (action.type) {
        case alertConstant.SHOW_ALERT:
            return { ...state, show: true, severity, message }
        case alertConstant.HIDE_ALERT:
            return { ...state, show: false, message: null }
        default:
            return state
    }
}