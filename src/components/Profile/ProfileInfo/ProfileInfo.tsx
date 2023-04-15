import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "comma/Preloader/Preloader";
import UserPhoto from "../../../assets/images/man.jpg";
import {ProfileData} from "./ProfileData/ProfileData";
import {useAppSelector} from "redux/ReduxStore";
import {useDispatch} from "react-redux";
import {saveMainPhoto} from "redux/reducers/profileReducer";


type Props = {
    isOwner: boolean
}
const ProfileInfo = ({isOwner}: Props) => {
    const dispatch = useDispatch()
    const profile = useAppSelector(state => state.profilePage.profile)

    if (!profile) {
        return <Preloader/>
    }

    const onSaveMainPhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target?.files?.length) {
            dispatch(saveMainPhoto(e.target.files[0]))
        }
    }
    return (
        <div>
            <div className={s.description}>
                <img className={s.userPhoto} src={profile.photos.large !== null ? profile.photos.large : UserPhoto}
                     alt=""/>
                <div>
                    <label htmlFor="avatar">Choose image to upload avatar</label>
                    <br/>
                    {isOwner && <input type='file' className={s.input} id='avatar' onChange={onSaveMainPhotoHandler}/>}
                </div>
                <ProfileData profile={profile}/>
            </div>
        </div>
    );
};

export default ProfileInfo;



