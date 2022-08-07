export type DialogsPageType = {
    messages: MessageType[]
    dialogs: DialogType[]
}
export type ProfilePageType = {
    postData: PostDataType[]
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

export const addPost = (message: string) => {
    let newPost = {id: 3, message: message, likeCounts: 0}
    state.profilePage.postData.push(newPost)
}

export const state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hello, how are you?', likeCounts: 12},
            {id: 2, message: 'It is my first post', likeCounts: 13},
        ],

    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'I feel great'},
            {id: 3, message: 'How was your day?'},
            {id: 4, message: 'How is the weather today?'},
        ],
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

