import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/ReduxStore";
import {setAuthDataUser} from "../../redux/reducers/authReducer";
import {authAPI} from "../../api/api";


export class HeaderWithApi extends React.Component<any, any> {
    componentDidMount() {
        /*axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})*/
        authAPI.logIn().then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    this.props.setAuthDataUser(id, login, email)
                }
            })
    }

    render() {
        return (
            <Header {...this.props}
                    isAuth={this.props.isAuth}
                    login={this.props.login}
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
export const HeaderContainer = connect(mapStateToProps, {setAuthDataUser})(HeaderWithApi)