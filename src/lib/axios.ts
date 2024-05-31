import axios from "axios";

const URLGLOBAL:string = import.meta.env.VITE_API_URL;

export const api = axios.create({
    baseURL: URLGLOBAL
})