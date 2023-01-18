import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../../comma/Preloader/Preloader";
import {ProfileType} from "../Profile";
import UserPhoto from "../../../assets/images/man.jpg";
import {ProfileStatus} from "./ProfileStatus";
import {Dispatch} from "redux";
import {ProfileStatusWithHook} from "./ProfileStatusWithHook";

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => (dispatch: Dispatch) => void
}
const ProfileInfo = ({profile, status, ...props}: ProfileInfoPropsType) => {
    if (!profile) {
        return <Preloader/>
    }
    const onChangeStatus = (status: string) => {
        props.updateUserStatus(status)
    }
    return (
        <div>
            <div className={s.description}>
                <img className={s.userPhoto} src={profile.photos.small !== null ? profile.photos.small : UserPhoto}
                     alt=""/>
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