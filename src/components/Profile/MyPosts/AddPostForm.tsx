import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormDataAddPostType = {
    newPostMessage: string
}
export const AddPostForm: React.FC<InjectedFormProps<FormDataAddPostType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Enter your text'
                       component='textarea'
                       name={'newPostMessage'}
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

