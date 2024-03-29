import {AnyAction} from "redux";
import {getAuthUserData} from "./authReducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "redux/store";

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

export const initializeApp = (): ThunkAction<void, AppStateType, unknown, AnyAction> => dispatch => {
        let promise = dispatch(getAuthUserData())
        promise.then(() => {
            dispatch(initializedSuccess())
        })
    }
