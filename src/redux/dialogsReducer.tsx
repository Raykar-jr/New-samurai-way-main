import {ActionTypes, DialogsPageType} from "./Store";

const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

export  const sendNewMessageAC = () => {
    return {
        type: ADD_NEW_MESSAGE
    } as const
}
export const updateNewMessageAC = (textMessage: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE',
        textMessage: textMessage
    } as const
}
let initialState = {
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'I feel great'},
        {id: 3, message: 'How was your day?'},
        {id: 4, message: 'How is the weather today?'},

    ],
    newMessageText: '',
    dialogs: [
        {id: 1, name: 'Nikolay'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Rostik'},
        {id: 4, name: 'Ruslan'},
    ],
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessageObj = {id: 5, message: state.newMessageText}
            return {...state, messages: [...state.messages, newMessageObj], newMessageText: ''}
            // state.messages.push(newMessageObj)
            // state.newMessageText = ''
        case UPDATE_NEW_MESSAGE:
            return {...state, newMessageText: action.textMessage}
            // state.newMessageText = action.textMessage
        default:
            return state;
    }
}