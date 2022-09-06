import React from 'react';
import {sendNewMessageAC, updateNewMessageAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


export type DialogsContainerPropsType = {
    store: any
}

export const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {
    let state = props.store.getState()

    const sendMessageHandler = () => {
        props.store.dispatch( sendNewMessageAC()) // {type: 'ADD-NEW-MESSAGE'}
    }
const updateNewMessageHandler = (textMessage: string) => {
        props.store.dispatch(updateNewMessageAC(textMessage)) // {type: 'UPDATE-NEW-MESSAGE',textMessage: textMessage}
}

    return (
        <Dialogs addNewMessage={sendMessageHandler}
                 updateNewMessage={updateNewMessageHandler}
                 state={state.dialogsPage}
        />
    );
};
