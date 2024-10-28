import axios from "axios";
import {IUserWithToken} from "../models/IUserWithToken";
import {BaseResponseModelType} from "../models/BaseResponseModelType";
import {IProduct} from "../models/IProduct";

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
    localStorage.setItem('user', JSON.stringify(userWithToken));
    return userWithToken;
}

export const loadAuthResources = async (): Promise<IProduct[] | undefined> => {
    const {data} = await axiosInstance.get<BaseResponseModelType>('/products');
    return data.products;
}