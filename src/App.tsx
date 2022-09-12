import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Nav";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";



// export type AppPropsType = {
//     state: StateType
//     dispatch: (action: ActionTypes) => void
//     store: any
//
// }

const App  = () => {
    debugger
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs}/> */}
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    {/*<Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>*/}
                    <Route path='/profile' render={() => <Profile />}/>
                    {/*<Route path='/profile' render={() => <Profile store={props.store}/>}/>*/}
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
