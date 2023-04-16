import React, {ChangeEvent, useRef} from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "comma/preloader/Preloader";
import UserPhoto from "../../../assets/images/man.jpg";
import {ProfileData} from "./ProfileData/ProfileData";
import {useAppSelector} from "redux/store";
import {useDispatch} from "react-redux";
import {saveMainPhoto} from "redux/reducers/profileReducer";
import {Button} from "antd";
import {UploadOutlined} from "@ant-design/icons";


type Props = {
    isOwner: boolean
}
const ProfileInfo = ({isOwner}: Props) => {
    const ref = useRef<HTMLInputElement>(null);

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
            <div className={s.profileInfoWrapper}>
                <img className={s.userPhoto} src={profile.photos.large !== null ? profile.photos.large : UserPhoto}
                     alt="user photo"/>
                    {isOwner && (
                        <div>
                            <Button icon={<UploadOutlined/>} onClick={() => ref.current?.click()}>Upload avatar</Button>
                            <input
                                type='file'
                                accept="image/*"
                                ref={ref}
                                onChange={onSaveMainPhotoHandler}
                                style={{display: "none"}}/>
                        </div>
                    )}
                <ProfileData profile={profile}/>
            </div>
    );
};

export default ProfileInfo;



