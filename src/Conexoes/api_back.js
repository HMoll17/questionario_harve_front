import axios from "axios";

const apiBack = axios.create({
    baseURL: "http://localhost:3333/api/"
})

export {apiBack}