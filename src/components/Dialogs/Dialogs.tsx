import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    )
}
export type DialogItemPropsType = {
    name: string;
    id: number
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.content}</div>
    )
}
export type MessagePropsType = {
    content: string
    id: number
}

const Dialogs = () => {
    const dialogData = [
        {id: 1, name: 'Nikolay'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Rostik'},
        {id: 4, name: 'Ruslan'},
    ]

    const messagesData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'I feel great'},
        {id: 3, message: 'How was your day?'},
        {id: 4, message: 'How is the weather today?'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
                <DialogItem name={dialogData[3].name} id={dialogData[3].id}/>
            </div>

            <div className={s.messages}>
                <Message content={messagesData[0].message} id={messagesData[0].id}/>
                <Message content={messagesData[1].message} id={messagesData[1].id}/>
                <Message content={messagesData[2].message} id={messagesData[2].id}/>
                <Message content={messagesData[3].message} id={messagesData[3].id}/>
            </div>
        </div>
    );
};

export default Dialogs;