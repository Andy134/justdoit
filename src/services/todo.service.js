import { API } from "../Api";

export const todoService = {
    getTodoLst,
    createNew
}

const TODO_API_ENDPOINT = "/todos"

function getTodoLst(postType, email) {
    return API.get(TODO_API_ENDPOINT + `?postType=${postType}&email=${email}`)
}

function createNew(todo) {
    return API.post(TODO_API_ENDPOINT, todo)
}

