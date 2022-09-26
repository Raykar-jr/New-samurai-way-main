import React from "react";
import UserPhoto from "../../assets/images/user.png";
import s from "./Users.module.css";
import axios from "axios";

export class UserC extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount/300)
            })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })

    }

    render () {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map(p => {
                        return (
                            <span  className={`${s.page} + ${this.props.currentPage === p ? s.selected : ''}`}
                                  onClick={() => this.onPageChanged(p)}> {p}</span>
                        )
                    })}

                </div>
                {this.props.users.map((u: any) => {
                        const imgUserLogic = u.photos.small !== null ? u.photos.small : UserPhoto
                        const unfollowHandler = () => {
                            this.props.unfollow(u.id)
                        }
                        const followHandler = () => {
                            this.props.follow(u.id)
                        }
                        return (
                            <div key={u.id}>
                <span>
                    <div>
                        <img className={s.photo} src={imgUserLogic} alt=""/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={unfollowHandler}>Unfollow</button>
                            : <button onClick={followHandler}>Follow</button>}
                    </div>
                </span>

                                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
                            </div>
                        )
                    }
                )}
            </div>
        );
    }
}
