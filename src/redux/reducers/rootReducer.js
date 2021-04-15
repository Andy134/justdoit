import { connectRouter } from "connected-react-router"
import { combineReducers } from "redux"
import {authentication} from "./user.reducer"
import {todo} from "./todo.reducer"

const rootReducer = (history) => combineReducers({
        router: connectRouter(history),
        authentication,
        todo
    }
)

export default rootReducer
