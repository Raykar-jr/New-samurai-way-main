import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/State";


export type DialogPropsType = {
    state: DialogsPageType
}

const Dialogs = (props: DialogPropsType) => {

    const messageElements = props.state.messages.map(el => <Message content={el.message} id={el.id}/>)
    const dialogElements = props.state.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)

    const addMessage = () => {
        if (refForTextarea && refForTextarea.current) { // Проверка, что refForTextarea !== null
            let message = refForTextarea.current.value
            alert(message)
        }
    }

    let refForTextarea = React.createRef<HTMLTextAreaElement>() // Своего рода костыль?)
    //let refForTextarea = useRef<HTMLTextAreaElement>() В дальнейшем будем использовать

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

                <textarea ref={refForTextarea}></textarea>
                <br/>
                <button onClick={addMessage}>Add message</button>
                {/*<Message content={messagesData[0].message} id={messagesData[0].id}/>*/}
                {/*<Message content={messagesData[1].message} id={messagesData[1].id}/>*/}
                {/*<Message content={messagesData[2].message} id={messagesData[2].id}/>*/}
                {/*<Message content={messagesData[3].message} id={messagesData[3].id}/>*/}
            </div>
        </div>
    );
};

export default Dialogs;