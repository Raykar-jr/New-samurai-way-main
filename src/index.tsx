import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type PostDataType = {
    id: number
    message: string
    likeCounts: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

const postData: PostDataType[] = [
    {id: 1, message: 'Hello, how are you?', likeCounts: 12},
    {id: 2, message: 'It is my first post', likeCounts: 13},
]
const dialogs: DialogType[] = [
    {id: 1, name: 'Nikolay'},
    {id: 2, name: 'Valera'},
    {id: 3, name: 'Rostik'},
    {id: 4, name: 'Ruslan'},
]
const messages: MessageType[] = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'I feel great'},
    {id: 3, message: 'How was your day?'},
    {id: 4, message: 'How is the weather today?'},
]

ReactDOM.render(
    <App
        postData={postData}
        dialogs={dialogs}
        messages={messages}
    />,
    document.getElementById('root')
);