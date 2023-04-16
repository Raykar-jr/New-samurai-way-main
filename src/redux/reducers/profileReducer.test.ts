import {v1} from "uuid";
import {addPost, PostDataType, profileReducer} from "./profileReducer";

test('post should be added', () => {
    // state
    const initialState = {
        postData: [
            {id: v1(), message: 'Hello, how are you?', likeCounts: 12},
            {id: v1(), message: 'It is my first post', likeCounts: 13},
        ] as PostDataType[],
        profile: null,
        status: '',
    }
    let action = addPost('Hello')

    // actions
    let newState = profileReducer(initialState, action)

    // expectations
    expect(newState.postData.length).toBe(3)
})


