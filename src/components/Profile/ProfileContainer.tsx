import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {AppStateType} from "../../redux/ReduxStore";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";



export class ProfileWithApi extends React.Component<any, any>{
    componentDidMount() {
        const userId = this.props.match.params.userId | 2
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                    this.props.setUserProfile(response.data)
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