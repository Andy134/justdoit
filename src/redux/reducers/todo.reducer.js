import { todoConstants } from "../../constants/todo.constants"
import * as PostType from "../../constants/PostType"

const initState = {
    todos: [],
    done: []
}

export function todo(state, action) {
    const { id } = action
    switch (action.type) {
        case todoConstants.FETCH_DATA:
            return state
        case todoConstants.GET_DATA:
            const { todos, done } = action;
            state = {
                todos: todos,
                done: done
            };
            return state
        case todoConstants.ADD_NEW:
            const { todo } = action;
            state = {
                ...state,
                todos: [].concat(todo).concat(state.todos)
            };
            return state
        case todoConstants.UPDATE_STATUS:
            const { postType } = action;
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
        case todoConstants.UPDATE_CRITICAL:
            const { critical } = action;
            let updates = state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.critical = critical
                }
                return todo
            });
            return { ...state, todos: updates }
        case todoConstants.DELETE_DATA:
            let deleteIndex = state.todos.findIndex((todo) => todo.id === id);
            let deleting = state.todos;
            deleting.splice(deleteIndex, 1)
            return { ...state, todos: deleting}
        default:
            return initState
    }
}