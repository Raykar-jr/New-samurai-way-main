import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {useAppSelector} from "redux/store";
import {MessageForm} from "components/Dialogs/MessageForm";
import {sendNewMessageAC} from "redux/reducers/dialogsReducer";
import {useDispatch} from "react-redux";


export const Dialogs: React.FC = () => {
    const dispatch = useDispatch()
    const messages = useAppSelector(state => state.dialogsPage.messages)
    const dialogs = useAppSelector(state => state.dialogsPage.dialogs)
    const messageElements = messages.map(el => <Message key={el.id}
                                                        content={el.message}
                                                        id={el.id}
    />)
    const dialogElements = dialogs.map(el => <DialogItem key={el.id}
                                                         name={el.name}
                                                         id={el.id}/>)
    const submitHandler = (data: string) => dispatch(sendNewMessageAC(data))

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                {messageElements}
                <MessageForm onSubmitForm={submitHandler}/>
            </div>
        </div>
    );
};

