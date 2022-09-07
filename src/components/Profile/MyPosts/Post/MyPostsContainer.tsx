import React from 'react';
import {MyPosts} from "../MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";
import {StoreContext} from "../../../../StoreContext";


// type MyPostsContainerPropsType = {
//     store: any
// }
export const MyPostsContainer = () => {
    // let state = props.store.getState()

    // const addPostHandler = () => {
    //     props.store.dispatch(addPostActionCreator()) // {type: 'ADD-POST'}
    // }
    // const onPostChange = (text: string) => {
    //     let action = updateNewPostTextActionCreator(text) // {type: 'UPDATE-NEW-POST-TEXT', text: text}
    //     props.store.dispatch(action)
    // }
    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState()

                const addPostHandler = () => {
                    store.dispatch(addPostActionCreator()) // {type: 'ADD-POST'}
                }

                const onPostChange = (text: string) => {
                    let action = updateNewPostTextActionCreator(text) // {type: 'UPDATE-NEW-POST-TEXT', text: text}
                    store.dispatch(action)
                }

                return (
        <div>
            <MyPosts addPost={addPostHandler}
                     updateNewPostText={onPostChange}
                     posts={state.profilePage.postData}
                     newPostText={state.profilePage.newPostText}
            />
        </div>
                )
            }
            }
        </StoreContext.Consumer>
    )
}