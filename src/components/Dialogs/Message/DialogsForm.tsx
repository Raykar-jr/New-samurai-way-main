import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {ElementCreator} from "../../../comma/formsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../../utilities/validators/validators";

export type FormDataDialogType = {
    dialogMessage: string
}

const maxLength50 = maxLengthCreator(50)
const Textarea = ElementCreator("textarea");

export const DialogsForm: React.FC<InjectedFormProps<FormDataDialogType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <Field
                placeholder='Enter your message'
                component={Textarea}
                name={'dialogMessage'}
                validate={[requiredField, maxLength50]}
            ></Field>
            <button>Send message</button>
        </form>
    );
};
export const DialogsReduxForm = reduxForm<FormDataDialogType>({form: 'dialogAddMessageForm'})(DialogsForm)

