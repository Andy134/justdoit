import API from "../Api";

export const todoService = {
    getInprocessLst
}

const TODO_API_ENDPOINT = "/todo"

function getInprocessLst(postType) {
    return API.get(TODO_API_ENDPOINT + "?" + "postType=" + postType)
}

