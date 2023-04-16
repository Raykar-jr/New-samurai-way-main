import React, {useEffect, useState} from 'react';
import {User} from "./User";
import s from './Users.module.css'
import {Input, Pagination, PaginationProps} from "antd";
import {useAppSelector} from "redux/store";
import {getUsers, setCurrentPage, setPageSize} from "redux/reducers/userReducer";
import {useDispatch} from "react-redux";
import {Preloader} from "comma/preloader/Preloader";

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
const { Search } = Input;
export const Users = () => {
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')

    const users = useAppSelector(state => state.usersPage.users)
    const isFetching = useAppSelector(state => state.usersPage.isFetching)
    const totalUsersCount = useAppSelector(state => state.usersPage.totalUsersCount)
    const currentPage = useAppSelector(state => state.usersPage.currentPage)
    const pageSize = useAppSelector(state => state.usersPage.pageSize)

    const onChangePagination: PaginationProps['onChange'] = (page, pageSize) => {
        dispatch(setCurrentPage(page))
        dispatch(setPageSize(pageSize))
    };
    const onSearch = (userName: string) => setSearchValue(userName)

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize,searchValue))
    }, [currentPage, pageSize, searchValue])

    if (isFetching) {
        return <Preloader/>
    }
    return (
        <>
            <div className={s.filterPanel}>
                <Pagination current={currentPage} showQuickJumper onChange={onChangePagination} pageSize={pageSize}
                            total={totalUsersCount}/>
                <Search onSearch={onSearch} allowClear className={s.searchInput} placeholder='Search users by name' />
            </div>
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

