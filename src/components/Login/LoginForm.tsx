import React from 'react';
import {Field, InjectedFormProps} from "redux-form";
import {ElementCreator} from "../../comma/formsControls/FormsControls";
import {requiredField} from "../../utilities/validators/validators";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
const Input = ElementCreator("input");

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} action="">
            <div>
                <Field placeholder='Login'
                       name={'login'}
                       component={Input}
                       validate={[requiredField]}
                />
            </div>
            <div>
                <Field placeholder='Password'
                       name={'password'}
                       component={Input}
                       validate={[requiredField]}
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
            </div>
        </form>
    );
};

