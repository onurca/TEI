var JWT = require('jwt-decode');
import axios from 'axios';

export default class AuthService {
    private domain: any;
    private axiosInstance: any;
    // Initializing important variables
    constructor(domain?: any) {
        const token = JSON.parse(localStorage.getItem('user') || '{}')['token']
        const instance = axios.create({
            baseURL: '/',
            headers: { 'Authorization': `Bearer ${token}` }
        })

        this.axiosInstance = instance
        this.domain = domain || 'http://localhost:5000' // API server domain
    }

    login = (username: any, password: any) => {
        return this.axiosInstance.POST(`${this.domain}/login`, { username: username, password: password })
            .then((resp: any) => {
                debugger
                this.setToken(resp.token) 
                return Promise.resolve(resp);
            })
            .catch((resp: any) => {
                debugger
                if (resp.response !== undefined && resp.response.status == '401') {
                    localStorage.removeItem('user')
                    location.replace('/login')
                } else {
                    return Promise.reject(resp)
                }
            })
    }

    loggedIn() {
        const token = this.getToken() 
        return !!token && !this.isTokenExpired(token) 
    }

    isTokenExpired(token: string) {
        try {
            const decoded = JWT(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    }

    setToken(idToken: string) {
        localStorage.setItem('id_token', idToken)
    }

    getToken() {
        return localStorage.getItem('id_token')
    }

    logout() {
        localStorage.removeItem('id_token');
    }

    getProfile() {
        return JWT(this.getToken());
    }
}