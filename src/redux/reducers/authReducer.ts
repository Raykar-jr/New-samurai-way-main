import {authAPI} from "../../api/api";
import {Dispatch} from "redux";
import {AppDispatch} from "../ReduxStore";

const SET_DATA_USER = 'SET_DATA_USER'

type ActionTypes = SetDataUserAT

type SetDataUserAT = ReturnType<typeof setAuthDataUser>

type AuthInitialStateType = {
    id: null | number
    login: null | string
    email: null | string
    isAuth: boolean
}
let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}


export const authReducer = (state: AuthInitialStateType = initialState, action: ActionTypes): AuthInitialStateType => {
    switch (action.type) {
        case SET_DATA_USER:
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export const setAuthDataUser = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {type: SET_DATA_USER, payload: {userId, login, email, isAuth}} as const
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data
            dispatch(setAuthDataUser(id, login, email, true))
        }
    })
}

export const logIn = (email: string, password: string, rememberMe: boolean) => (dispatch: AppDispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
           if (response.data.resultCode === 0) {
               dispatch(getAuthUserData())
           }
        })
}

export const logOut = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthDataUser(null, null, null, false))
            }
        })
}


