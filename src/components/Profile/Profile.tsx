import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/State";



type ProfilePropsType = {
    state: ProfilePageType
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
           <ProfileInfo/>
            <MyPosts postData={props.state.postData}/>
        </div>
    )
}