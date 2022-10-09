import {ActionTypes, SidebarType} from "../Store";

const initialState = [
    {id: 1, name: 'Ruslan'},
    {id: 2, name: 'Nikolay'},
    {id: 3, name: 'Ruslan'},
    {id: 4, name: 'Rostik'},

]
export const sidebarReducer = (state: SidebarType[] = initialState, action: ActionTypes) => {

    return state
}