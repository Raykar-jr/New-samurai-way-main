import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import dialogManPhoto from 'assets/images/dialogMan.png'

export type DialogItemPropsType = {
    name: string;
    id: string
}

export const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog}>
            <img className={s.dialogImage} src={dialogManPhoto} alt=""/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    )
}