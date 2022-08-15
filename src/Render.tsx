import ReactDOM from "react-dom";
import App from "./App";
import {addNewMessage, addPost, StateType, updateNewMessage, updateNewPostText} from "./redux/State";
import React from "react";


export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
            addNewMessage={addNewMessage}
            updateNewMessage={updateNewMessage}
            // postData={postData}
            // dialogs={dialogs}
            // messages={messages}
        />,
        document.getElementById('root')
    );
}
// отдаём эту функцию в index.tsx для начальной отрисовки и в state.tsx для перерисовки с обновлёнными данными. Нет циклической зависимости - гуд
// 3 игрок