import { connectRouter } from "connected-react-router"
import { combineReducers } from "redux"
import { todo } from "./todo.reducer"

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    todo
}
)

export default rootReducer
