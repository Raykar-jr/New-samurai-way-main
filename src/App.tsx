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
import {StateType} from "./redux/State";


export type AppPropsType = {
    state: StateType
    addPost: () => void
    updateNewPostText: (text: string) => void
    addNewMessage: () => void
    updateNewMessage: (textMessage: string) => void

}

const App: React.FC<AppPropsType> = (props ) => {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs}/> */}
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}
                                                                  addNewMessage={props.addNewMessage}
                                                                  updateNewMessage={props.updateNewMessage}
                    />}/>
                    <Route path='/profile' render={() => <Profile state={props.state.profilePage}
                                                                  addPost={props.addPost}
                                                                  updateNewPostText={props.updateNewPostText}
                    />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
