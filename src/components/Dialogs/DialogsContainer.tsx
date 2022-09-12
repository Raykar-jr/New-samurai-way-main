import React from 'react';
import {sendNewMessageAC, updateNewMessageAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// export const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             { (store) => {
//                 let state = store.getState()
//
//                 const sendMessageHandler = () => {
//                    store.dispatch( sendNewMessageAC()) // {type: 'ADD-NEW-MESSAGE'}
//                 }
//
//                 const updateNewMessageHandler = (textMessage: string) => {
//                     store.dispatch(updateNewMessageAC(textMessage)) // {type: 'UPDATE-NEW-MESSAGE',textMessage: textMessage}
//                 }
//                 return (
//                 <Dialogs addNewMessage={sendMessageHandler}
//                  updateNewMessage={updateNewMessageHandler}
//                  state={state.dialogsPage}/>
//                 )
//             }
//             }
//         </StoreContext.Consumer>
//     );
// };

const mapStateToProps = (state: any) => {
    return {
        state: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addNewMessage: () => {
            dispatch( sendNewMessageAC()) // {type: 'ADD-NEW-MESSAGE'}
        },
        updateNewMessage: (textMessage: string) => {
            dispatch(updateNewMessageAC(textMessage)) // {type: 'UPDATE-NEW-MESSAGE',textMessage: textMessage}
        }
    }
}
export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)