import React, {useEffect, useState} from 'react';
import s from "./Users.module.css";


type UsersPaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
}
export const UsersPaginator = (props: UsersPaginatorPropsType) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionSize = 15
    let portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    useEffect(() => setPortionNumber(Math.ceil(props.currentPage/portionSize)), [props.currentPage]);
    return (
        <div className={s.paginator}>

            {portionNumber > 1 &&
                <button className={s.pagButton} onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>
            }

            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p, index) => {
                return (
                    <span key={index} className={`${s.page} + ${props.currentPage === p ? s.selected : ''}`}
                          onClick={() => props.onPageChanged(p)}> {p}</span>
                )
            })}

            {portionCount > portionNumber &&
                <button className={s.pagButton} onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>
            }
        </div>
    );
};

