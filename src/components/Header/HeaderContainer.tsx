import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/ReduxStore";
import {logIn} from "../../redux/reducers/authReducer";



export class HeaderWithApi extends React.Component<any, any> {
    componentDidMount() {
        debugger
        /*axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})*/
       /* authAPI.logIn().then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    this.props.setAuthDataUser(id, login, email)
                }
            })*/
        this.props.logIn()
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
export const HeaderContainer = connect(mapStateToProps, {logIn})(HeaderWithApi)