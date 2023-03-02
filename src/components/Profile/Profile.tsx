import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/Post/MyPostsContainer";
import {Dispatch} from "redux";


type ProfilePropsType = {
    saveMainPhoto: Function
    isOwner: boolean
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => (dispatch: Dispatch) => void
}
export type ProfileType = {
    aboutMe: null | string,
    contacts: {
        facebook: null | string,
        website: null | string,
        vk:  string | undefined,
        twitter:  string | undefined,
        instagram:  string | undefined,
        youtube: null | string,
        github: null | string,
        mainLink: null | string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: null | string,
    fullName: null | string,
    userId: number,
    photos: {
        small: null | string,
        large: null | string
    }
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         saveMainPhoto={props.saveMainPhoto}
                         isOwner={props.isOwner}
                         status={props.status}
                         updateUserStatus={props.updateUserStatus}
            />
            <MyPostsContainer/>
        </div>
    )
}