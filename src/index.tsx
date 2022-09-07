import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/ReduxStore";
import {StoreContext} from "./StoreContext";


let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <StoreContext.Provider value={store}>
        <App
            state={store.getState()}
            dispatch={store.dispatch.bind(store)}
            store={store}// .bind(store) сохраняем владельца метода, чтобы не потерять контекст this. Мы передаём метод объекта как коллбэк дальше, где его вызовут
        />,
        </StoreContext.Provider>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState()) // вызов функции для начальной отрисовки без изменения state

store.subscribe( () => {
    let state = store.getState()
    rerenderEntireTree(state)
})