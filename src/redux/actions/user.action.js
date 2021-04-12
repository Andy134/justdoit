/* eslint-disable react-hooks/rules-of-hooks */
import { userService } from "./../../services/user.service";
import { userConstants } from "./../../redux/user.constants";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export const userActions = {
    login,
    logout
}

function login(email, password) {

    const dispatch = useDispatch()
    
    const history = useHistory()

    let token = userService.login(email, password)
    if (token) {
        localStorage.setItem('token', JSON.stringify(token));
        dispatch(success(token))
        history.push("/")
    }
    else{
        dispatch(failure("Login Failed"))
    }

    function success(ptoken) {
        return { type: userConstants.LOGIN_SUCCESS, ptoken }
    }

    function failure(error) {
        return { type: userConstants.LOGIN_FAILURE, error }
    }

}

function logout() {

    const dispatch = useDispatch()

    dispatch({ type: userConstants.LOGOUT })
        localStorage.removeItem('token')
    
}