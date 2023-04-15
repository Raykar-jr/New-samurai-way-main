import React, {useEffect} from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "components/Profile/MyPosts/MyPosts";
import {useAppSelector} from "redux/ReduxStore";
import {useDispatch} from "react-redux";
import {getUserProfile, getUserStatus} from "redux/reducers/profileReducer";
import {useHistory, useParams} from "react-router-dom";


export type ProfileType = {
    aboutMe: null | string,
    contacts: {
        facebook: null | string,
        website: null | string,
        vk: string | undefined,
        twitter: string | undefined,
        instagram: string | undefined,
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
export const Profile = () => {
    let history = useHistory();
    const {userId} = useParams<{ userId: string }>()
    const dispatch = useDispatch()
    const authorizedId = useAppSelector(state => state.auth.id)
    const isAuth = useAppSelector(state => state.auth.isAuth)

    const refreshProfile = () => {
        let ourUserId = +userId
        if (!ourUserId) {
            ourUserId = authorizedId || +''
            if (!ourUserId) {
                history.push('/login')
            }
        }
        dispatch(getUserProfile(ourUserId))
        dispatch(getUserStatus(ourUserId))
    }
    useEffect(() => {
        refreshProfile()
    }, [userId])
    return (
        <div>
            <ProfileInfo
                isOwner={!userId}
            />
            <MyPosts/>
        </div>
    )
}