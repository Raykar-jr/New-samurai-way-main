import React from 'react';
import './index.css';
import {state} from "./redux/State";
import {rerenderEntireTree} from "./Render";

rerenderEntireTree(state) // вызов функции для начальной отрисовки без изменения state
