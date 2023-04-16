import React, {useEffect} from 'react';
import './App.css';
import {Navbar} from "components/Navbar/Nav";
import {useDispatch} from "react-redux";
import {initializeApp} from "redux/reducers/appReducer";
import {useAppSelector} from "redux/store";
import {Preloader} from "comma/preloader/Preloader";
import {Layout} from 'antd';
import {HeaderContainer} from "components/Header/Header";
import logo from 'assets/images/social-media-logo.png'
import {RoutesPage} from "components/RoutesPage/RoutesPage";


const {Header, Content, Footer, Sider} = Layout;

export const App = () => {
    const dispatch = useDispatch()
    const isAppInitialized = useAppSelector(state => state.app.initialized)

    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    if (!isAppInitialized) {
        return <Preloader/>
    }
    return (
        <Layout>
            <Sider
                style={{background: 'white'}}
                breakpoint="lg"
                collapsedWidth="0"
            >
                <img className='logo' src={logo} width={200} alt="logo"/>
                <Navbar/>
            </Sider>
            <Layout>
                <Header style={{padding: 0, background: 'white'}}>
                    <HeaderContainer/>
                </Header>
                <Content style={{margin: '24px 16px 0'}}>
                    <div style={{padding: 24, minHeight: 360, background: 'white'}}>
                        <RoutesPage/>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Social Network ©2023 Created by Kiryl Azaranka</Footer>
            </Layout>
        </Layout>
    );
}