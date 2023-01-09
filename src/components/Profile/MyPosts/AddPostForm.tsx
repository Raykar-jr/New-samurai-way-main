import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utilities/validators/validators";
import {ElementCreator} from "../../../comma/formsControls/FormsControls";

export type FormDataAddPostType = {
    newPostMessage: string
}
const maxLength10 = maxLengthCreator(10)
const Textarea = ElementCreator("textarea");

export const AddPostForm: React.FC<InjectedFormProps<FormDataAddPostType>> = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Enter your text'
                       component={Textarea}
                       name={'newPostMessage'}
                       validate={[requiredField, maxLength10]}

                >
                </Field>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

export const AddPostReduxForm = reduxForm<FormDataAddPostType>({form: 'addPostForm'})(AddPostForm)

