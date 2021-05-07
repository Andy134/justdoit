import {API} from "../Api";

export const todoService = {
    getTodoLst
}

const TODO_API_ENDPOINT = "/todos"

function getTodoLst(postType, email) {
    return API.get(TODO_API_ENDPOINT + "?" + "postType=" + postType + "&email=" + email)
}

