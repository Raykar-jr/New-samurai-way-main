import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {UsersContainer} from "./components/Users/UsersContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";

const App  = () => {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs}/> */}
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                    <Route path='/login' render={() => <Login />}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
