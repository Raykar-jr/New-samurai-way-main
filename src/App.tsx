import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Nav";
import {Profile} from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {DialogType, MessageType, PostDataType} from "./index";


export type AppPropsType = {
    postData: PostDataType[]
    dialogs: DialogType[]
    messages: MessageType[]
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    <Route path='/dialogs' render={ () => <Dialogs dialogs={props.dialogs}
                                                                   messages={props.messages}/>}/>
                    <Route path='/profile' render={ () => <Profile postData={props.postData} />}/>
                    <Route path='/news' render={ () => <News /> }/>
                    <Route path='/music' render={ () => <Music /> }/>
                    <Route path='/settings' render={ () => <Settings /> }/>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
