import React from 'react';
import {combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profileReducer";
import {dialogsReducer} from "./reducers/dialogsReducer";
import {sidebarReducer} from "./reducers/sidebarReducer";
import {userReducer} from "./reducers/userReducer";
import {authReducer} from "./reducers/authReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: userReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)


// @ts-ignore
window.store = store



