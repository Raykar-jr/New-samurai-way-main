import React from 'react';
import {Profile, ProfileType} from "./Profile";
import {AppStateType} from "../../redux/ReduxStore";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

/*type PathParamsType = {
    userId: string
}*/
type MapStateToPropsType = {
    profile: ProfileType | null
}

/*type ProfileWithApiPropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType*/

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

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

export const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    // WithAuthRedirect,
)(ProfileWithApi)


/*
let AuthRedirectComponent = WithAuthRedirect(ProfileWithApi)
const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
export const ProfileContainer = connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)*/
