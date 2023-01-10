import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/ReduxStore";
import {logOut} from "../../redux/reducers/authReducer";



export class HeaderWithApi extends React.Component<any, any> {
    render() {
        return (
            <Header {...this.props}
                    isAuth={this.props.isAuth}
                    login={this.props.login}
                    logOut={this.props.logOut}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
export const HeaderContainer = connect(mapStateToProps, {logOut})(HeaderWithApi)