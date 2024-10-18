import axios from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});

// ----------------- This could be another option on how to set up the *getAll* function to make it shorter

// const getAll = async <T,>(endpoint: string): Promise<T> => {
//     const axiosResponse = await axiosInstance.get<T>(endpoint)
//     return axiosResponse.data;
// };

export const apiService = {
    userService: {
        getAll:async (): Promise<IUser[]> => {
        const {data} = await axiosInstance.get<IUser[]>('/users');
        return data;
        }
    },
    postService: {
        getAll:async (): Promise<IPost[]> => {
            const {data} = await axiosInstance.get<IPost[]>('/posts');
            return data;
        }
    },
    commentService: {
        getAll:async (): Promise<IComment[]> => {
            const {data} = await axiosInstance.get<IComment[]>('/comments');
            return data;
        }
    }
}