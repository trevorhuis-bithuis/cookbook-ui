import { reactive } from 'vue'
import { login } from './services'
import jwt_decode from "jwt-decode";

export const store = reactive({
    user: {},
    register(firstName, lastName, username, password) {

    },
    async login(username, password) {
        const response = await login(username, password);
        const accessToken = response.accessToken;
        const refreshToken = response.refreshToken;
        const decoded = jwt_decode(accessToken);
        console.log(decoded);
    },
    logout() {

    }
})