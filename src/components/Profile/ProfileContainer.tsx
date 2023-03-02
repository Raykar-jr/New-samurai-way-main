import React from 'react';
import {Profile, ProfileType} from "./Profile";
import {AppStateType} from "../../redux/ReduxStore";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, saveMainPhoto, updateUserStatus} from "../../redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

/*type PathParamsType = {
    userId: string
}*/
type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
    authorizedId: number | null
    isAuth: boolean
}

/*type ProfileWithApiPropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType*/

export class ProfileWithApi extends React.Component<any, any> {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedId || 25765
            // || 25765
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         isOwner={!this.props.match.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus}
                         saveMainPhoto={this.props.saveMainPhoto}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, saveMainPhoto}),
    withRouter,
    // WithAuthRedirect,
)(ProfileWithApi)


/*
let AuthRedirectComponent = WithAuthRedirect(ProfileWithApi)
const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
export const ProfileContainer = connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)*/
