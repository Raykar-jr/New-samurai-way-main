import {ActionTypes} from "../actionTypes";

export type DialogsInitialStateType = typeof initialState
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'

export  const sendNewMessageAC = (textMessage: string) => {
    return {type: ADD_NEW_MESSAGE, textMessage} as const
}

let initialState = {
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'I feel great'},
        {id: 3, message: 'How was your day?'},
        {id: 4, message: 'How is the weather today?'},
    ] as MessageType[],
    dialogs: [
        {id: 1, name: 'Nikolay'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Rostik'},
        {id: 4, name: 'Ruslan'},
    ] as DialogType[],
}

export const dialogsReducer = (state: DialogsInitialStateType = initialState, action: ActionTypes): DialogsInitialStateType => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessageObj = {id: 5, message: action.textMessage}
            return {...state, messages: [...state.messages, newMessageObj]}
        default:
            return state;
    }
}