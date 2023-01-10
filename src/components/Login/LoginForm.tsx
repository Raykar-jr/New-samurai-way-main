import React from 'react';
import {Field, InjectedFormProps} from "redux-form";
import {ElementCreator} from "../../comma/formsControls/FormsControls";
import {requiredField} from "../../utilities/validators/validators";
import s from '../../comma/formsControls/FormsControl.module.css'

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
const Input = ElementCreator("input");

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} action="">
            <div>
                <Field placeholder='Email'
                       name={'email'}
                       component={Input}
                       validate={[requiredField]}
                />
            </div>
            <div>
                <Field placeholder='Password'
                       name={'password'}
                       component={Input}
                       validate={[requiredField]}
                       type='password'
                />
            </div>
            <div>
                <Field type="checkbox"
                       name={'rememberMe'}
                       component={Input}
                />
                remember me
            </div>
            <div>
                <button>
                    Login
                </button>
                {props.error &&
                    <div className={s.commonError}>
                        {props.error}
                    </div>}
            </div>
        </form>
    );
};

