import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


const Dialogs = () => {
    const dialogs = [
        {id: 1, name: 'Nikolay'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Rostik'},
        {id: 4, name: 'Ruslan'},
    ]

    const messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'I feel great'},
        {id: 3, message: 'How was your day?'},
        {id: 4, message: 'How is the weather today?'},
    ]
    const messageElements = messages.map(el => <Message content={el.message} id={el.id}/>)
    const dialogElements = dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)

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