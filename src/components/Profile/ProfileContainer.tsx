import React from 'react';
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/ReduxStore";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";



export class ProfileWithApi extends React.Component<any, any>{
    componentDidMount() {
        const userId = this.props.match.params.userId | 2
        /*axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)*/
        profileAPI.getUserProfile(userId)
            .then(data => {
                    this.props.setUserProfile(data)
                }
            )
    }

    render() {
     return (
         <div>
             <Profile {...this.props} profile={this.props.profile} />
         </div>
     )
 }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,

    }
}
const WithUrlDataContainerComponent = withRouter(ProfileWithApi)
export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)