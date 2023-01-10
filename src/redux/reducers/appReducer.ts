import {AnyAction} from "redux";
import {getAuthUserData} from "./authReducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../ReduxStore";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

type ActionTypes = initializedSuccessAT

type initializedSuccessAT = ReturnType<typeof initializedSuccess>

type AppInitialStateType = {
    initialized: boolean
}
let initialState = {
    initialized: false
}


export const appReducer = (state: AppInitialStateType = initialState, action: ActionTypes): AppInitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS} as const)

export const initializeApp = (): ThunkAction<void, AppStateType, unknown, AnyAction> =>
    (dispatch, getState: () => AppStateType) => {
        let promise = dispatch(getAuthUserData())
        promise.then(() => {
            dispatch(initializedSuccess())
        })
    }
