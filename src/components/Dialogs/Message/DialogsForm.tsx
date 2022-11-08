import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormDataDialogType = {
    dialogMessage: string
}

export const DialogsForm: React.FC<InjectedFormProps<FormDataDialogType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <Field
                placeholder='Enter your message'
                component='textarea'
                name={'dialogMessage'}
            ></Field>
            <br/>
            <button>Send message</button>
        </form>
    );
};
export const DialogsReduxForm = reduxForm<FormDataDialogType>({form: 'dialogAddMessageForm'})(DialogsForm)

