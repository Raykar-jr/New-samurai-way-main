import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '62b1c9b5-2799-4e1c-add0-9db3f425760b'}
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    }

}

export const authAPI = {
    logIn() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(data: any) {
        return instance.post('auth/login', {...data})
    },
    logout() {
        return instance.delete('auth/login')
    }


}

export const profileAPI = {
    getUserProfile(userId: number = 2) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getUserStatus(userId: number = 2) {
        return instance.get(`/profile/status/` + userId)
            .then(response => response.data)

    },
    updateUserStatus(status: string) {
        return instance.put(`/profile/status`, {status: status})

    }

}



