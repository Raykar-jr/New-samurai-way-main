import React from 'react';
import {Dispatch} from "redux";
import {User} from "./User";
import s from './Users.module.css'
import {Pagination, PaginationProps} from "antd";

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
    onPageChanged: (page: number, pageSize: number) => void
    users: UserType[]
    followingInProgress: Array<number>
    followThunkCreator: (userId: number) => (dispatch: Dispatch) => void
    unfollowThunkCreator: (userId: number) => (dispatch: Dispatch) => void
}
export const Users = (props: UsersNewPropsType) => {
    const onChange: PaginationProps['onChange'] = (page, pageSize) => {
        props.onPageChanged(page, pageSize)
    };

    return (
        <>
            <Pagination current={props.currentPage} showQuickJumper onChange={onChange} pageSize={props.pageSize}
                        total={props.totalUsersCount}/>
            <div className={s.usersContainer}>
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
        </>

    );
};

