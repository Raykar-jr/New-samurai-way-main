import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsInitialStateType} from "../../redux/reducers/dialogsReducer";
import {DialogsReduxForm, FormDataDialogType} from "./Message/DialogsForm";


export type DialogPropsType = {
    state: DialogsInitialStateType
    addNewMessage: (textMessage: string) => void
}

const Dialogs: React.FC<DialogPropsType> = (props) => {
    const messageElements = props.state.messages.map(el => <Message key={el.id}
                                                                    content={el.message}
                                                                    id={el.id}
    />)
    const dialogElements = props.state.dialogs.map(el => <DialogItem key={el.id}
                                                                     name={el.name}
                                                                     id={el.id}/>)


    const addNewMessage = (formData: FormDataDialogType) => {
        props.addNewMessage(formData.dialogMessage)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                {messageElements}
                <DialogsReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

export default Dialogs;