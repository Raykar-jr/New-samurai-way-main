import React, {useEffect} from 'react';
import {User} from "./User";
import s from './Users.module.css'
import {Pagination, PaginationProps} from "antd";
import {useAppSelector} from "redux/ReduxStore";
import {getUsers, setCurrentPage, setPageSize} from "redux/reducers/userReducer";
import {useDispatch} from "react-redux";
import {Preloader} from "comma/Preloader/Preloader";

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

export const Users = () => {
    const dispatch = useDispatch()

    const users = useAppSelector(state => state.usersPage.users)
    const isFetching = useAppSelector(state => state.usersPage.isFetching)
    const totalUsersCount = useAppSelector(state => state.usersPage.totalUsersCount)
    const currentPage = useAppSelector(state => state.usersPage.currentPage)
    const pageSize = useAppSelector(state => state.usersPage.pageSize)

    const onChange: PaginationProps['onChange'] = (page, pageSize) => {
        dispatch(setCurrentPage(page))
        dispatch(setPageSize(pageSize))
    };

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize))
    }, [currentPage, pageSize])

    if (isFetching) {
        return <Preloader/>
    }
    return (
        <>
            <Pagination current={currentPage} showQuickJumper onChange={onChange} pageSize={pageSize}
                        total={totalUsersCount}/>
            <div className={s.usersContainer}>
                {users.map((u: UserType) => {
                        return (
                            <User key={u.id}
                                  user={u}
                            />
                        )
                    }
                )}
            </div>
        </>

    );
};

