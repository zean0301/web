import axios from "axios";

const request = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    responseType: 'json'
});

const config = {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
    }
}

export {
    request,
    config,
};