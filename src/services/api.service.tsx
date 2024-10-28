import axios from "axios";
import {IUserWithToken} from "../models/IUserWithToken";
import {BaseResponseModelType} from "../models/BaseResponseModelType";
import {IProduct} from "../models/IProduct";
import {retrieveLocalStorage} from "../helpers/helpers";
import {ITokenPair} from "../models/ITokenPair";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth/',
    headers: {}
})

type LoginData = {
    username: string,
    password: string,
    expiresInMins: number
}

axiosInstance.interceptors.request.use(request => {
    console.log(request);
    if (request.method?.toUpperCase() === 'GET') {
        let user = retrieveLocalStorage<IUserWithToken>('user');
        request.headers.Authorization = 'Bearer ' + user.accessToken
    }
    return request;
})

export const login = async ({username, password, expiresInMins}:LoginData): Promise<IUserWithToken> => {
    const {data: userWithToken} = await axiosInstance.post<IUserWithToken>('/login', {username, password, expiresInMins});
    localStorage.setItem('user', JSON.stringify(userWithToken));
    return userWithToken;
}

export const loadAuthResources = async (): Promise<IProduct[] | undefined> => {
    const {data} = await axiosInstance.get<BaseResponseModelType>('/products');
    console.log(data);
    return data.products;
}

export const refresh = async () => {
   const iUserWithToken = retrieveLocalStorage<IUserWithToken>('user');
   const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
       refreshToken: iUserWithToken.refreshToken,
       expiresInMins: 1
   });
   iUserWithToken.accessToken = accessToken;
   iUserWithToken.refreshToken = refreshToken;
   localStorage.setItem('user', JSON.stringify(iUserWithToken));
}