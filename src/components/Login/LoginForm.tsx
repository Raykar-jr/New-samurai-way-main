import React from 'react';
import {Card, Checkbox, Input} from "antd";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {Button} from "comma/button/Button";
import {SendOutlined} from "@ant-design/icons";
import s from './styles.module.css'
import loginPageLogo from 'assets/images/login-page.jpg'
import {useDispatch} from "react-redux";
import {login} from "redux/reducers/authReducer";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm = () => {
    const dispatch = useDispatch()

    const {control, handleSubmit, formState: {errors}} = useForm<FormDataType>({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false
        }
    });
    const onSubmit: SubmitHandler<FormDataType> = async (data) => {
        const {email, password, rememberMe} = data
        dispatch(login(email, password, rememberMe))
    }


    return (
        <Card style={{width: 500}}>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <img src={loginPageLogo} width={200} alt=""/>
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: 'The email is required',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Entered value does not match email format"
                        }

                    }}
                    render={({field}) => <Input allowClear placeholder='Email'  {...field} />}
                />
                <p style={{fontSize: '13px', color: '#B00020'}}>{errors.email?.message}</p>
                <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: 'The password is required',
                        minLength: {
                            value: 5,
                            message: 'The min length of the password must be more than 5 symbols'
                        }
                    }}
                    render={({field}) => <Input.Password placeholder='Password'  {...field} />}
                />
                <p style={{fontSize: '13px', color: '#B00020'}}>{errors.password?.message}</p>
                <Controller name="rememberMe"
                            control={control}
                            render={({field}) => <Checkbox checked={field.value}
                                                           onChange={e => field.onChange(e.target.checked)}>Remember
                                me</Checkbox>}
                />
                <Button className={`blue-button ${s.loginButton}`} type={'submit'}
                        name={'Login'}><SendOutlined/></Button>
            </form>
        </Card>
    );
};

