import {ProfileType} from "../../Profile";
import {ProfileStatusWithHook} from "../ProfileStatusWithHook";
import React from "react";
import {Contact} from "./Contact";

type ProfileDataPropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void

}
export const ProfileData = ({profile, status, updateUserStatus}: ProfileDataPropsType) => {
    return (
        <div>
            <div>
                <b>Full name:</b> {profile.fullName}
            </div>
            {/* <ProfileStatus status={status} onChangeStatus={onChangeStatus}/>*/}
            <ProfileStatusWithHook status={status} onChangeStatus={updateUserStatus}/>
            <div>
                <b>About me:</b> {profile.aboutMe}
            </div>
            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professional skills:</b> {profile.lookingForAJobDescription}
                </div>
            }

            <div>
                <b>My contacts:</b>
                <ul>
                    {Object.keys(profile.contacts).map(key => {
                        // @ts-ignore
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                    })}
                </ul>

            </div>
        </div>
    )
}