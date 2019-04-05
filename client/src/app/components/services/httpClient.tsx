import axios from 'axios';

export class httpClient {
    axiosInstance: any;
    constructor() {
        const token = JSON.parse(localStorage.getItem('user') || '{}')['token']
        const instance = axios.create({
            baseURL: '/',
            headers: { 'Authorization': `Bearer ${token}` }
        })
        this.axiosInstance = instance
    }
    get = (url: string) => {
        return this.axiosInstance.get(url)
            .then((resp: any) => {
            })
            .catch((resp: any) => {
                if (resp.response !== undefined && resp.response.status == '401') {
                    localStorage.removeItem('user')
                    location.replace('/login')
                } else {
                    return Promise.reject(resp)
                }
            })
    }
    post = (url: string, formData: any) => {
        return this.axiosInstance.post(url, formData)
            .then((resp: any) => {
            })
            .catch((resp: any) => {
                if (resp.response !== undefined && resp.response.status == '401') {
                    localStorage.removeItem('user')
                    location.replace('/login')
                } else {
                    return Promise.reject(resp)
                }
            })
    }
    setTokenOnLogin = () => {
        const token = JSON.parse(localStorage.getItem('user') || '{}')['token']
        this.axiosInstance.defaults.headers = { 'Authorization': `Bearer ${token}` }
    }
    clearTokenOnLogout = () => {
        localStorage.removeItem('user')
        this.axiosInstance.defaults.headers = {}
    }
}
