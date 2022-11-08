import React from 'react';
import {DialogsInitialStateType, sendNewMessageAC} from "../../redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/ReduxStore";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";



type MapStateToPropsType = {
    state: DialogsInitialStateType
}
type DispatchPropsType = {
    addNewMessage: (textMessage: string) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        state: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): DispatchPropsType => {
    return {
        addNewMessage: (textMessage: string) => {
            dispatch(sendNewMessageAC(textMessage)) // {type: 'ADD-NEW-MESSAGE'}
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
