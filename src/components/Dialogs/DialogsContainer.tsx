import React from 'react';
import {sendNewMessageAC, updateNewMessageAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../StoreContext";


// export type DialogsContainerPropsType = {
//     store: any
// }

export const DialogsContainer = () => { // React.FC<DialogsContainerPropsType>
    // let state = props.store.getState()

    // const sendMessageHandler = () => {
    //     props.store.dispatch( sendNewMessageAC()) // {type: 'ADD-NEW-MESSAGE'}
    // }
// const updateNewMessageHandler = (textMessage: string) => {
//         props.store.dispatch(updateNewMessageAC(textMessage)) // {type: 'UPDATE-NEW-MESSAGE',textMessage: textMessage}
// }

    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState()

                const sendMessageHandler = () => {
                   store.dispatch( sendNewMessageAC()) // {type: 'ADD-NEW-MESSAGE'}
                }

                const updateNewMessageHandler = (textMessage: string) => {
                    store.dispatch(updateNewMessageAC(textMessage)) // {type: 'UPDATE-NEW-MESSAGE',textMessage: textMessage}
                }
                return (
                <Dialogs addNewMessage={sendMessageHandler}
                 updateNewMessage={updateNewMessageHandler}
                 state={state.dialogsPage}/>
                )
            }
            }
        </StoreContext.Consumer>
    );
};
