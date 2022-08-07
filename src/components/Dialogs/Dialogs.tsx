import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../index";


export type DialogPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

const Dialogs = (props: DialogPropsType) => {

    const messageElements = props.messages.map(el => <Message content={el.message} id={el.id}/>)
    const dialogElements = props.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
                {/*<DialogItem name={dialogData[0].name} id={dialogData[0].id}/>*/}
                {/*<DialogItem name={dialogData[1].name} id={dialogData[1].id}/>*/}
                {/*<DialogItem name={dialogData[2].name} id={dialogData[2].id}/>*/}
                {/*<DialogItem name={dialogData[3].name} id={dialogData[3].id}/>*/}
            </div>

            <div className={s.messages}>
                {messageElements}
                {/*<Message content={messagesData[0].message} id={messagesData[0].id}/>*/}
                {/*<Message content={messagesData[1].message} id={messagesData[1].id}/>*/}
                {/*<Message content={messagesData[2].message} id={messagesData[2].id}/>*/}
                {/*<Message content={messagesData[3].message} id={messagesData[3].id}/>*/}
            </div>
        </div>
    );
};

export default Dialogs;