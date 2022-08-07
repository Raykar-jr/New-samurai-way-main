import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./redux/State";


ReactDOM.render(
    <App
        state={state}
        // postData={postData}
        // dialogs={dialogs}
        // messages={messages}
    />,
    document.getElementById('root')
);