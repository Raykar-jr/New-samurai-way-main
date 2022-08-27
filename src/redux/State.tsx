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

export type StoreType = {
    _state: StateType
    _callSubscriber: (vau: any) => void
    getState: () => StateType
    subscribe: (observer: (state: StateType) => void) => void // ????
    dispatch: (action: ActionTypes ) => void
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    text: string
}
export type AddPostActionType = {
    type: 'ADD-POST'
}
export type AddNewMessageActionType = {
    type: 'ADD-NEW-MESSAGE'
}
export type UpdateNewMessageActionType = {
    type: 'UPDATE-NEW-MESSAGE'
    textMessage: string
}

export type ActionTypes = UpdateNewPostTextActionType | AddPostActionType | AddNewMessageActionType | UpdateNewMessageActionType
export let store: StoreType = {
    _state: {
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
    },
    _callSubscriber(vau: any) {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost: PostDataType = {id: 3, message: this._state.profilePage.newPostText, likeCounts: 0}
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.text
            this._callSubscriber(this._state)
        } else if (action.type === 'ADD-NEW-MESSAGE') {
            let newMessageObj = {id: 5, message: this._state.dialogsPage.newMessageText}
            this._state.dialogsPage.messages.push(newMessageObj)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-MESSAGE') {
            this._state.dialogsPage.newMessageText = action.textMessage
            this._callSubscriber(this._state)
        }
    },


}






