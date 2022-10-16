import React from 'react';
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/ReduxStore";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/reducers/profileReducer";
import {Redirect, withRouter} from "react-router-dom";




export class ProfileWithApi extends React.Component<any, any>{
    componentDidMount() {
        const userId = this.props.match.params.userId | 2
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to='/login'/>
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
        isAuth: state.auth.isAuth

    }
}
const WithUrlDataContainerComponent = withRouter(ProfileWithApi)
export const ProfileContainer = connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)