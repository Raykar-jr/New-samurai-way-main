import {addPostActionCreator, profileReducer, setUserProfile, updateNewPostTextActionCreator} from "./profileReducer";
import {dialogsReducer, sendNewMessageAC, updateNewMessageAC} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {setCurrentPage, setTotalCount, toggleIsFetching} from "./userReducer";
import {UserType} from "../components/Users/Users";


type DialogsPageType = {
    messages: MessageType[]
    dialogs: DialogType[]
    newMessageText: string
}
type ProfilePageType = {
    postData: PostDataType[]
    newPostText: string
    profile: null
}
export type SidebarType = {
    id: number
    name: string
}
 type PostDataType = {
    id: number
    message: string
    likeCounts: number
}
type DialogType = {
    id: number
    name: string
}
type MessageType = {
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
    dispatch: (action: ActionTypes) => void
}
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type SendNewMessageActionType = ReturnType<typeof sendNewMessageAC>
export type UpdateNewMessageActionType = ReturnType<typeof updateNewMessageAC>
export type SetCurrentPageAT = ReturnType<typeof setCurrentPage>
export type SetTotalCountAT = ReturnType<typeof setTotalCount>
export type ToggleIsFetching = ReturnType<typeof toggleIsFetching>
export type SetUserProfile = ReturnType<typeof setUserProfile>

export type FollowAT = {
    type: 'FOLLOW'
    userID: number
}
export type UnfollowAT = {
    type: 'UNFOLLOW'
    userID: number
}
export type SetUsersAT = {
    type: 'SET_USERS'
    users: UserType[]
}

export type ActionTypes = UpdateNewPostTextActionType
    | AddPostActionType
    | SendNewMessageActionType
    | UpdateNewMessageActionType
    | FollowAT
    | UnfollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | SetTotalCountAT
    | ToggleIsFetching
    | SetUserProfile

export let store: StoreType = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hello, how are you?', likeCounts: 12},
                {id: 2, message: 'It is my first post', likeCounts: 13},
            ],
            newPostText: '',
            profile: null

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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)

    },


}








