import axios from "axios";
import {IUser} from "../models/IUser";
import {IResponseUsersModel} from "../models/IResponseUsersModel";
import {IResponsePostsModel} from "../models/IResponsePostsModel";

const axiosInstance = axios.create({
    baseURL:'https://dummyjson.com'
})

// ---------------------------------------------------------------------------------------- User Service

export const userService = {
    getUsers: async ():Promise<IUser[]> => {
   return (await axiosInstance.get<IResponseUsersModel>('/users')).data.users
},
    getUser: () => {

    }

}

// ----------------------------------------------------------------------------------------- Post Service

const postService = {
    getPostsOfUser: async (id: number) => {
    let axiosResponse = await axiosInstance.get<IResponsePostsModel>('/posts', {params: {userId: id}});

    }
}

export {userService, postService};