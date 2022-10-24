import React from 'react';
import {Profile, ProfileType} from "./Profile";
import {AppStateType} from "../../redux/ReduxStore";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

/*type PathParamsType = {
    userId: string
}*/
type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
}

/*type ProfileWithApiPropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType*/

export class ProfileWithApi extends React.Component<any, any> {
    componentDidMount() {
        const userId = this.props.match.params.userId | 2
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    // WithAuthRedirect,
)(ProfileWithApi)


/*
let AuthRedirectComponent = WithAuthRedirect(ProfileWithApi)
const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
export const ProfileContainer = connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)*/
