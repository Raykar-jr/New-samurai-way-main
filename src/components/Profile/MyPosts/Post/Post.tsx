import React from 'react';
import s from './Post.module.css'
import iconForPost from '../../../../assets/images/iconForPost.png'

type PostPropsType = {
    message?: string | number
    likeCounts?: number
    id?: string
}
export const Post = (props: PostPropsType) => {
    return (
        <div>
            <div className={s.item}>
                <img className={s.avatar} src={iconForPost} alt=""/>

                {props.message}
                <div>
                    {props.likeCounts}<span> Like</span>
                </div>
            </div>
        </div>
    );
};

