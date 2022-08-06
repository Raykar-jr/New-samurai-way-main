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
    id: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.content}</div>
    )
}
export type MessagePropsType = {
    content: string
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name='Nikolay' id='1'/>
                <DialogItem name='Valera' id='2'/>
                <DialogItem name='Rostik' id='3'/>
                <DialogItem name='Ruslan' id='4'/>
            </div>

            <div className={s.messages}>
                <Message content='Hello'/>
                <Message content='I feel great'/>
                <Message content='How was your day?'/>

            </div>

        </div>
    );
};

export default Dialogs;