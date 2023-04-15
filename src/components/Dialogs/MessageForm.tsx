import {useForm, SubmitHandler, Controller} from "react-hook-form";
import {Input} from "antd";
import {Button} from "comma/button/Button";
import {SendOutlined} from "@ant-design/icons";
import React from "react";
import s from './Dialogs.module.css'

type Inputs = {
    textMessage: string,
}
type Props = {
    onSubmitForm: (textMessage: string) => void
}
const { TextArea } = Input;
export const MessageForm: React.FC<Props> = ({onSubmitForm}) => {
    const {control, reset, handleSubmit, formState: {errors}} = useForm<Inputs>({
        defaultValues: {
            textMessage: ''
        }
    });
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        await onSubmitForm(data.textMessage)
        reset()
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <Controller
                name="textMessage"
                control={control}
                rules={{
                    required: 'The field is required',
                    minLength: {
                        value: 3,
                        message: 'The min length of the message must be more than 3 symbols'
                    }
                }}
                render={({ field }) => <TextArea style={{ height: 100, width: 350, resize: 'none' }}  allowClear placeholder='Type your message'  {...field} />}
            />
            <p style={{fontSize: '13px', color: '#B00020'}}>{errors.textMessage?.message}</p>
            <Button className={'blue-button'} type={'submit'} name={'Send message'}><SendOutlined /></Button>
        </form>
    );
}

