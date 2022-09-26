import React from 'react';
import s from './Preloader.module.css'
import preloader from '../../assets/images/Preloader.svg'

export const Preloader = () => {
    return (
        <img className={s.img} src={preloader} alt=""/>
    );
};

