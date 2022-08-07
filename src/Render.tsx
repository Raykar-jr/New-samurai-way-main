import ReactDOM from "react-dom";
import App from "./App";
import {addPost, StateType} from "./redux/State";
import React from "react";


export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            // postData={postData}
            // dialogs={dialogs}
            // messages={messages}
        />,
        document.getElementById('root')
    );
}