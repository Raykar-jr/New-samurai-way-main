import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../../comma/Preloader/Preloader";

type ProfileInfoPropsType = {
    profile: any
}
const ProfileInfo = ({profile, ...props}: ProfileInfoPropsType) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src="https://media.istockphoto.com/photos/minsk-gate-to-the-city-picture-id1135449521?k=20&m=1135449521&s=612x612&w=0&h=B3RuC830SeFg3mJWr9fo6lOBchoj_USHBkE8twNhF_M=" alt=""/>
            </div>
            <div className={s.description}>
                <img src={profile.photos.small !== null ? profile.photos.small : ''} alt=""/>
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
                Ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;