import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://media.istockphoto.com/photos/minsk-gate-to-the-city-picture-id1135449521?k=20&m=1135449521&s=612x612&w=0&h=B3RuC830SeFg3mJWr9fo6lOBchoj_USHBkE8twNhF_M=" alt=""/>
            </div>
            <div className={s.description}>
                Ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;