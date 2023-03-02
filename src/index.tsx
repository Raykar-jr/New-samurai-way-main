import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {store} from "./redux/ReduxStore";
import {Provider} from "react-redux";
import App from "./App";
import {HashRouter} from "react-router-dom";


ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>,
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);


// @ts-ignore
window.store = store;