import React from 'react';
import {Store} from "redux";
import {ReduxStateType} from "./redux/ReduxStore";
import {ActionTypes} from "./redux/Store";

export const StoreContext = React.createContext({} as Store<ReduxStateType, ActionTypes>) //  было (null)