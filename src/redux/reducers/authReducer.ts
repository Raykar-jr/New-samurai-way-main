import {authAPI} from "api";
import {AnyAction, Dispatch} from "redux";
import { AppStateType} from "redux/store";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";

const SET_DATA_USER = 'SET_DATA_USER'

type ActionTypes = SetDataUserAT

type SetDataUserAT = ReturnType<typeof setAuthDataUser>

type AuthInitialStateType = {
    id: number | null
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
            return {...state, ...action.payload, id: action.payload.userId}
        default:
            return state;
    }
}

export const setAuthDataUser = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {type: SET_DATA_USER, payload: {userId, login, email, isAuth}} as const
}


export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me()
            if (response.resultCode === 0) {
                let {id, login, email} = response.data
                dispatch(setAuthDataUser(id, login, email, true))
            }

}


export const login = (email: string, password: string, rememberMe: boolean):ThunkAction<void, AppStateType, unknown, AnyAction> =>
    async (dispatch, getState: () => AppStateType) => {
        let response = await authAPI.login(email, password, rememberMe)
                if (response.data.resultCode === 0) {
                    await dispatch(getAuthUserData())
                }
                else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                    dispatch(stopSubmit('login', {_error: message}) )
                }

    }

export const logout = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(setAuthDataUser(null, null, null, false))
            }
}


