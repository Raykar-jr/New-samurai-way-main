import {ActionTypes} from "../actionTypes";
import {v1} from "uuid";

export type DialogsInitialStateType = typeof initialState
export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}

const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'

export  const sendNewMessageAC = (textMessage: string) => {
    return {type: ADD_NEW_MESSAGE, textMessage} as const
}

let initialState = {
    messages: [
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'I feel great'},
        {id: v1(), message: 'How was your day?'},
        {id: v1(), message: 'How is the weather today?'},
    ] as MessageType[],
    dialogs: [
        {id: v1(), name: 'Nikolay'},
        {id: v1(), name: 'Valera'},
        {id: v1(), name: 'Rostik'},
        {id: v1(), name: 'Ruslan'},
    ] as DialogType[],
}

export const dialogsReducer = (state: DialogsInitialStateType = initialState, action: ActionTypes): DialogsInitialStateType => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessageObj = {id: v1(), message: action.textMessage}
            return {...state, messages: [...state.messages, newMessageObj]}
        default:
            return state;
    }
}