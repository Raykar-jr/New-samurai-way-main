import React from 'react';
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/ReduxStore";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


export class ProfileWithApi extends React.Component<any, any> {
    componentDidMount() {
        const userId = this.props.match.params.userId | 2
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
    }
}

let AuthRedirectComponent = WithAuthRedirect(ProfileWithApi)
const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
export const ProfileContainer = connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)