import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/ReduxStore";


let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <App
            state={store.getState()}
            dispatch={store.dispatch.bind(store)} // .bind(store) сохраняем владельца метода, чтобы не потерять контекст this. Мы передаём метод объекта как коллбэк дальше, где его вызовут
            // addPost={store.addPost.bind(store)}
            // updateNewPostText={store.updateNewPostText.bind(store)}
            // addNewMessage={store.addNewMessage.bind(store)}
            // updateNewMessage={store.updateNewMessage.bind(store)}

        />,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState()) // вызов функции для начальной отрисовки без изменения state

store.subscribe( () => {
    let state = store.getState()
    rerenderEntireTree(state)
})