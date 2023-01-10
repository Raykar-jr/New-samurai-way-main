import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {store} from "./redux/ReduxStore";
import {Provider} from "react-redux";
import App from "./App";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>,
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);


// @ts-ignore
window.store = store;