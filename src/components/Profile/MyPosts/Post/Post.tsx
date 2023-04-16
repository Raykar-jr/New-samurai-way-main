import React, {useState} from 'react';
import s from './Post.module.css'

import {CloseCircleTwoTone, LikeTwoTone} from "@ant-design/icons";
import {Avatar, Card} from "antd";
import {useDispatch} from "react-redux";
import {removePost} from "redux/reducers/profileReducer";

type PostPropsType = {
    message?: string | number
    likeCounts?: number
    id: string
}
export const Post = (props: PostPropsType) => {
    const dispatch = useDispatch()

    const [value, setValue] = useState(props.likeCounts || 0)
    const [liked, setLiked] = useState(false)
    const likeHandler = () => {
        setLiked(prevState => !prevState)
        setValue(prevState => liked ? prevState - 1 : prevState + 1)
    }
    const removePostHandler = () => {
        dispatch(removePost(props.id))
    }
    return (
        <Card className={s.postWrapper}>
            <CloseCircleTwoTone className={s.deleteIcon} onClick={removePostHandler}/>
            <div>
                <div className={s.imageWithText}>
                    <Avatar className={s.avatar} src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${props.id}`} />
                    {props.message}
                </div>
                <div className={s.postLike}>
                    {value}
                    <LikeTwoTone onClick={likeHandler} />
                    { liked ? "unlike me" : "like me"}
                </div>
            </div>
        </Card>
    );
};

