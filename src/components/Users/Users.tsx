import React from 'react';
import {Dispatch} from "redux";
import {UsersPaginator} from "./UsersPaginator";
import {User} from "./User";


export type UserType = {
    id: number
    followed: boolean
    status: null | string
    name: string
    uniqueUrlName: null | string
    photos: {
        small: null | string
        large: null | string
    }
    location?: {
        city: string
        country: string
    }
}

type UsersNewPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    users: UserType[]
    followingInProgress: Array<number>
    followThunkCreator: (userId: number) => (dispatch: Dispatch) => void
    unfollowThunkCreator: (userId: number) => (dispatch: Dispatch) => void
}
export const Users = (props: UsersNewPropsType) => {
    return (
        <div>
            <UsersPaginator totalUsersCount={props.totalUsersCount}
                            onPageChanged={props.onPageChanged}
                            currentPage={props.currentPage}
                            pageSize={props.pageSize}
            />
            {props.users.map((u: UserType) => {
                    return (
                        <User key={u.id}
                              user={u}
                              followThunkCreator={props.followThunkCreator}
                              unfollowThunkCreator={props.unfollowThunkCreator}
                              followingInProgress={props.followingInProgress}
                        />
                    )
                }
            )}
        </div>
    );
};

