import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionTypes, DialogsPageType} from "../../redux/Store";
import {sendNewMessageAC, updateNewMessageAC} from "../../redux/dialogsReducer";


export type DialogPropsType = {
    state: DialogsPageType
    dispatch: (action: ActionTypes) => void

}

const Dialogs: React.FC<DialogPropsType> = (props) => {

    const messageElements = props.state.messages.map(el => <Message key={el.id} content={el.message} id={el.id}/>)
    const dialogElements = props.state.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)

    // const addMessage = () => {
    //     if (refForTextarea && refForTextarea.current) { // Проверка, что refForTextarea !== null
    //         let message = refForTextarea.current.value // считывает значение с ссылки-объекта и присваивает его переменной
    //         alert(message)
    //     }
    // }

/*    let refForTextarea = React.createRef<HTMLTextAreaElement>()*/ // Своего рода костыль?) Создаёт ссылку-объект
    //let refForTextarea = useRef<HTMLTextAreaElement>() В дальнейшем будем использовать
    const sendMessageHandler = () => {
        // props.addNewMessage()
        props.dispatch( sendNewMessageAC())
    }
const onChangeTextAreaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let textMessage = event.target.value
    if (textMessage) {
        // props.updateNewMessage(textMessage)
        props.dispatch(updateNewMessageAC(textMessage))
    }
}

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}

            </div>

            <div className={s.messages}>
                {messageElements}

                <textarea onChange={onChangeTextAreaHandler}
                          value={props.state.newMessageText}
                ></textarea>
                <br/>
                <button onClick={sendMessageHandler}>Send message</button>

            </div>
        </div>
    );
};

export default Dialogs;