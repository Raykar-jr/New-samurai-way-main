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
            return {...state, ...action.data, isAuth: true}
        default:
            return state;
    }
}

export const setAuthDataUser = (userId: number, login: string, email: string) => {
    return {type: SET_DATA_USER, data: {userId, login, email}} as const
}