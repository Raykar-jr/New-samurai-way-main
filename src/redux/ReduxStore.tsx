import React from 'react';
import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {ActionTypes} from "./Store";
import {userReducer} from "./userReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: userReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

type RootState = typeof rootReducer; // New
// export let store = createStore(rootReducer) Old one
export let store: Store<ReduxStateType, ActionTypes> = createStore(rootReducer)
export type ReduxStateType = ReturnType<RootState>



