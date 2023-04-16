import React, {useState} from 'react';
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
import {
    AppstoreOutlined,
    ContainerOutlined,
    IdcardOutlined,
    MailOutlined,
    HomeOutlined,
    SoundOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';

type MenuItem = Required<MenuProps>['items'][number]
export const Navbar = () => {
    const [activeKey, setActiveKey] = useState([localStorage.getItem('ACTIVE_KEY')] as string[] || ['1'])

    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem;
    }

    const items: MenuItem[] = [
        getItem('Profile', '1', <NavLink to="/profile"><HomeOutlined/></NavLink>),
        getItem('Users', '2', <NavLink to="/users"><IdcardOutlined/></NavLink>),
        getItem('News', '3', <NavLink to="/news"><ContainerOutlined/></NavLink>),
        getItem('Messages', '4', <NavLink to="/dialogs"><MailOutlined/></NavLink>),
        getItem('Others', 'sub2', <AppstoreOutlined/>, [
            getItem('Music', '5', <NavLink to='/music'><SoundOutlined/></NavLink>),
            getItem('Settings', '6', <NavLink to="/settings"><SettingOutlined/></NavLink>),
        ]),
    ];
    const onSelectHandler = ({key}: any) => {
        setActiveKey([key])
        localStorage.setItem('ACTIVE_KEY', key)
    }

    return (
        <nav className={s.nav}>
            <div style={{width: 185}}>
                <Menu
                    defaultSelectedKeys={activeKey}
                    mode="inline"
                    theme="light"
                    items={items}
                    onSelect={onSelectHandler}
                />
            </div>
        </nav>
    )
}