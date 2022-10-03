import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {AppStateType} from "../../redux/ReduxStore";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";



export class ProfileWithApi extends React.Component<any, any>{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/15')
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
export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileWithApi)