import React from 'react';
import {DialogsInitialStateType, sendNewMessageAC, updateNewMessageAC} from "../../redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/ReduxStore";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


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

type MapStateToPropsType = {
    state: DialogsInitialStateType
}
type DispatchPropsType = {
    addNewMessage: () => void
    updateNewMessage: (textMessage: string) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        state: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): DispatchPropsType => {
    return {
        addNewMessage: () => {
            dispatch(sendNewMessageAC()) // {type: 'ADD-NEW-MESSAGE'}
        },
        updateNewMessage: (textMessage: string) => {
            dispatch(updateNewMessageAC(textMessage)) // {type: 'UPDATE-NEW-MESSAGE',textMessage: textMessage}
        }
    }
}

/*compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)*/
// let AuthRedirectComponent = WithAuthRedirect(Dialogs)
/*
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)*/
export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)
