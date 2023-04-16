import {ProfileStatus} from "components/Profile/ProfileInfo/ProfileStatus";
import React from "react";
import {Contact} from "./Contact";
import {ProfileType} from "components/Profile/Profile";
import {updateUserStatus} from "redux/reducers/profileReducer";
import {useDispatch} from "react-redux";
import {useAppSelector} from "redux/store";
import {Avatar, List} from "antd";

type ProfileDataPropsType = {
    profile: ProfileType

}
export const ProfileData = ({profile}: ProfileDataPropsType) => {
    const dispatch = useDispatch()
    const onChangeStatus = (status: string) => dispatch(updateUserStatus(status))
    const status = useAppSelector(state => state.profilePage.status)

    const data = [
        {
            title: 'Full name:',
            description: profile.fullName
        },
        {
            title: 'My status',
            description: <ProfileStatus status={status} onChangeStatus={onChangeStatus}/>
        },
        {
            title: 'About me',
            description: profile.aboutMe || "I am passionate about my work and I'm an excellent communicator."
        },
        {
            title: 'Looking for a job:',
            description: profile.lookingForAJob ? 'Yes' : 'No'
        },
        {
            title: 'My professional skills:',
            description: profile.lookingForAJobDescription || 'leadership, mentoring, project management and conflict resolution'
        },
        {
            title: 'My contacts:',
            description:  Object.keys(profile.contacts).map(key => {
                // @ts-ignore
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })
        }
    ];

    return (
        <div>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                            title={item.title}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}