import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '62b1c9b5-2799-4e1c-add0-9db3f425760b'}
})


export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10, userName?: string) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&term=${userName}`)
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
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post('auth/login', {email, password, rememberMe})
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
            .then(response => response.data)

    },
    savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put<ResponseType<{photos: {small: string, large: string}}>>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    data: D
}


