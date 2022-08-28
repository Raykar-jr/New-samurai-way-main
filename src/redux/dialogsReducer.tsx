import {ActionTypes, DialogsPageType} from "./State";

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

export const dialogsReducer = (state: DialogsPageType, action: ActionTypes) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessageObj = {id: 5, message: state.newMessageText}
            state.messages.push(newMessageObj)
            state.newMessageText = ''
            break;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.textMessage
            break;
        default:
            return state;
    }

    return state
}