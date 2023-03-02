import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../../comma/Preloader/Preloader";
import {ProfileType} from "../Profile";
import UserPhoto from "../../../assets/images/man.jpg";
// import {ProfileStatus} from "./ProfileStatus";
import {Dispatch} from "redux";
import {ProfileStatusWithHook} from "./ProfileStatusWithHook";


type ProfileInfoPropsType = {
    saveMainPhoto: Function
    isOwner: boolean
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => (dispatch: Dispatch) => void
}
const ProfileInfo = ({profile, status, isOwner, saveMainPhoto, ...props}: ProfileInfoPropsType) => {
    if (!profile) {
        return <Preloader/>
    }
    const onChangeStatus = (status: string) => {
        props.updateUserStatus(status)
    }
    const onSaveMainPhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target?.files?.length) {
            saveMainPhoto(e.target.files[0])
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
                    { isOwner && <input type='file' className={s.input} id='avatar' onChange={onSaveMainPhotoHandler}/> }
                </div>

               {/* <ProfileStatus status={status} onChangeStatus={onChangeStatus}/>*/}
                <ProfileStatusWithHook status={status} onChangeStatus={onChangeStatus}/>
                <div>Обо мне: {profile.aboutMe}</div>
                <div>В поисках работы: {profile.lookingForAJob.toString()}</div>
                <div>Полное имя: {profile.fullName}</div>
                <div>
                    Мои контакты:
                    <ul>
                        <li><a href={profile.contacts.vk}>VK</a></li>
                        <li><a href={profile.contacts.twitter}>Twitter</a></li>
                        <li><a href={profile.contacts.instagram}>Instagram</a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default ProfileInfo;