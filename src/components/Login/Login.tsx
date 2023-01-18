import React from 'react';
import {FormDataType, LoginForm} from "./LoginForm";
import {reduxForm} from "redux-form";
import {logIn} from "../../redux/reducers/authReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/ReduxStore";
import {Redirect} from "react-router-dom";


type LoginPropsType = {
    isAuth: boolean
    logIn: (email: string, password: string, rememberMe: boolean) => void
}

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
       const {email, password, rememberMe} = formData
        props.logIn(email, password, rememberMe)

    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'}) (LoginForm)

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {logIn})(Login)


