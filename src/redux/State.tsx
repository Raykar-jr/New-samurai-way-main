import {rerenderEntireTree} from "../Render";

export type DialogsPageType = {
    messages: MessageType[]
    dialogs: DialogType[]
    newMessageText: string
}
export type ProfilePageType = {
    postData: PostDataType[]
    newPostText: string
}
export type SidebarType = {
    id: number
    name: string
}
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
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType[]
}

// export const addPost = (message: string) => {
//     let newPost: PostDataType = {id: 3, message: message, likeCounts: 0}
//     state.profilePage.postData.push(newPost)
//     rerenderEntireTree(state) // перерисуй всё с обновлёнными данными
// }
export const addPost = () => {
    let newPost: PostDataType = {id: 3, message: state.profilePage.newPostText, likeCounts: 0}
    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}
export const updateNewPostText = (text: string) => {
    state.profilePage.newPostText = text
    rerenderEntireTree(state)
}

export const addNewMessage = () => {
let newMessageObj = {id: 5, message: state.dialogsPage.newMessageText}
    state.dialogsPage.messages.push(newMessageObj)
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree(state)
}
export const updateNewMessage = (textMessage: string) => {
state.dialogsPage.newMessageText = textMessage
    rerenderEntireTree(state)
}

export const state: StateType = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hello, how are you?', likeCounts: 12},
            {id: 2, message: 'It is my first post', likeCounts: 13},
        ],
        newPostText: '',

    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'I feel great'},
            {id: 3, message: 'How was your day?'},
            {id: 4, message: 'How is the weather today?'},

        ],
        newMessageText: '',
        dialogs: [
            {id: 1, name: 'Nikolay'},
            {id: 2, name: 'Valera'},
            {id: 3, name: 'Rostik'},
            {id: 4, name: 'Ruslan'},
        ],
    },
    sidebar: [
        {id: 1, name: 'Ruslan'},
        {id: 2, name: 'Nikolay'},
        {id: 3, name: 'Ruslan'},
        {id: 4, name: 'Rostik'},

    ]
}

