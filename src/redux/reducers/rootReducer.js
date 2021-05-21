import { connectRouter } from "connected-react-router"
import { combineReducers } from "redux"
import { todo } from "./todo.reducer"
import { alert } from "./alert.reducer"

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    todo,
    alert
})

export default rootReducer
