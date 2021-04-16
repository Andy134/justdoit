import { todoConstants } from "../../constants/todo.constants"
import * as PostType from "../../constants/PostType"

const initState = {
    todos: [],
    done: []
}

export function todo(state, action) {
    switch (action.type) {
        case todoConstants.FETCH_DATA:
            return state
        case todoConstants.GET_DATA:
            let { todos, done } = action;
            state = {
                todos: todos,
                done: done
            };
            return state
        case todoConstants.ADD_NEW:
            let { todo } = action;
            state = {
                ...state,
                todos: [].concat(todo).concat(state.todos)
            };
            return state
        case todoConstants.UPDATE_STATUS:
            let { id, postType } = action;
            if (postType === PostType.IN_PROGRESS) {
                let index = state.todos.findIndex(item => item.id === id);
                let removed = state.todos.splice(index, 1);
                return { ...state, todos: state.todos, done: [].concat(removed).concat(state.done) }
            }
            else {
                let index = state.done.findIndex(item => item.id === id);
                let removed = state.done.splice(index, 1);
                return { ...state, todos: [].concat(removed).concat(state.todos), done: state.done }
            }
        default:
            return initState
    }
}