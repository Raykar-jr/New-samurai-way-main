import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsInitialStateType} from "../../redux/reducers/dialogsReducer";
import {Redirect} from "react-router-dom";


export type DialogPropsType = {
    state: DialogsInitialStateType
    isAuth: boolean
    addNewMessage: () => void
    updateNewMessage: (textMessage: string) => void

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
        props.addNewMessage()
    }
const onChangeTextAreaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let textMessage = event.target.value
    if (textMessage) {
        props.updateNewMessage(textMessage)
    }
}
    if (!props.isAuth) return <Redirect to='/login'/>
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