import React from 'react';
import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {ActionTypes} from "./Store";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
})
type RootState = typeof reducers; // New
// export let store = createStore(reducers) Old one
export let store: Store<ReduxStateType, ActionTypes> = createStore(reducers)
export type ReduxStateType = ReturnType<RootState>



