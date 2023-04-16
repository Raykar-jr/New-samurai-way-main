import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./reducers/profileReducer";
import {dialogsReducer} from "./reducers/dialogsReducer";
import {sidebarReducer} from "./reducers/sidebarReducer";
import {userReducer} from "./reducers/userReducer";
import {authReducer} from "./reducers/authReducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {ActionTypes} from "./actionTypes";
import {appReducer} from "./reducers/appReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: userReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
})


export type AppDispatch = ThunkDispatch<AppStateType, unknown, ActionTypes>

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionTypes>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector

export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AnyAction>
// позволяет типизировать возвращаемое значение ThunkCreator
// const foo = (): AppThunkType  => (dispatch) => {...}


// @ts-ignore
window.store = store



