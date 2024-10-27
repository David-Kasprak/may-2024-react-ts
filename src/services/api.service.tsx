import axios from "axios";
import {IUserWithToken} from "../models/IUserWithToken";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth/',
    headers: {}
})

type LoginData = {
    username: string,
    password: string,
    expiresInMins: number
}

export const login = async ({username, password, expiresInMins}:LoginData): Promise<IUserWithToken> => {
    const {data: userWithToken} = await axiosInstance.post<IUserWithToken>('/login', {username, password, expiresInMins});
    return userWithToken;
}