import React from 'react';
import {Route} from "react-router-dom";
import {DialogsContainer} from "components/Dialogs/DialogsContainer";
import {ProfileContainer} from "components/Profile/ProfileContainer";
import News from "components/News/News";
import Music from "components/Music/Music";
import Settings from "components/Settings/Settings";
import {UsersContainer} from "components/Users/UsersContainer";
import Login from "components/Login/Login";

export const RoutesPage = () => {
    return (
        <>
            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Route path='/login' render={() => <Login/>}/>
        </>
    );
};

