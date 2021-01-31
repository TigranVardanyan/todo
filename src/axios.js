import axios from "axios";

const instance = axios.create({
    baseURL: "https://todo-13203-default-rtdb.firebaseio.com/"
});

export default instance;