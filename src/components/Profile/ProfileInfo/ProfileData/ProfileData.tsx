import {ProfileStatus} from "components/Profile/ProfileInfo/ProfileStatus";
import React from "react";
import {Contact} from "./Contact";
import {ProfileType} from "components/Profile/Profile";
import {updateUserStatus} from "redux/reducers/profileReducer";
import {useDispatch} from "react-redux";
import {useAppSelector} from "redux/ReduxStore";

type ProfileDataPropsType = {
    profile: ProfileType

}
export const ProfileData = ({profile}: ProfileDataPropsType) => {
    const dispatch = useDispatch()

    const status = useAppSelector(state => state.profilePage.status)

    const onChangeStatus = (status: string) => dispatch(updateUserStatus(status))
    return (
        <div>
            <div>
                <b>Full name:</b> {profile.fullName}
            </div>
            <ProfileStatus status={status} onChangeStatus={onChangeStatus}/>
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