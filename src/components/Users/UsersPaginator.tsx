import React from 'react';
import s from "./Users.module.css";

type UsersPaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
}
export const UsersPaginator = (props: UsersPaginatorPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((p, index) => {
                return (
                    <span key={index} className={`${s.page} + ${props.currentPage === p ? s.selected : ''}`}
                          onClick={() => props.onPageChanged(p)}> {p}</span>
                )
            })}
        </div>
    );
};

