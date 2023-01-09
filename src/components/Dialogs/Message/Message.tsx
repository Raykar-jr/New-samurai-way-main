import s from "../Dialogs.module.css";
import React from "react";

export type MessagePropsType = {
    content: string
    id: string
}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.content}</div>
    )
}
