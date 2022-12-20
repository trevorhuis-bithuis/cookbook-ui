
import { publicAxios } from './axiosPublic.js';

async function login(username, password) {
    const response = await publicAxios.post('/user/login', {
        username,
        password
    });
    console.log(response);
}

export { login };