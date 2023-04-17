import React from 'react';
import {Redirect, Route} from "react-router-dom";
import News from "components/News/News";
import Music from "components/Music/Music";
import Settings from "components/Settings/Settings";
import {Login} from "components/Login/Login";
import {Dialogs} from "components/Dialogs/Dialogs";
import {Profile} from "components/Profile/Profile";
import {Users} from "components/Users/Users";

export const RoutesPage = () => {
    return (
        <>
            <Route path='/dialogs' render={() => <Dialogs/>}/>
            <Route path='/profile/:userId?' render={() => <Profile/>}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
            <Route path='/users' render={() => <Users/>}/>
            <Route path='/login' render={() => <Login/>}/>
            <Route path="*">
               <Redirect to="/login" />
            </Route>
        </>
    );
};

