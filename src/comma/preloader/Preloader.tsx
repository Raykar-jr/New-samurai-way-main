import React from 'react';
import s from './Preloader.module.css'
import {Button} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

export const Preloader = () => {
    return (
        <Button loading className={s.preloader} icon={<LoadingOutlined />}>Loading</Button>
    );
};

