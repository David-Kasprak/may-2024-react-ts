import axios from "axios";
import {ITodo} from "../models/ITodo";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {"Content-Type": 'application/json'},
})

export const apiService = {
    todo: {
        getAll: async (page: number) => {
            const skip = (page - 1) * 30;
            const axiosResponse = await axiosInstance.get<ITodo>('/todos', {
                params: {
                    skip: skip
                }
            });
            console.log(axiosResponse);
        }
    }
}