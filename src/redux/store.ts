import {IUser} from "../models/IUser";
import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {Root} from "react-dom/client";

type UserSliceType = {
    users: IUser[],
    user: IUser | null
}

const userInitState:UserSliceType = {
    users: [],
    user: null
}

export let userSlice = createSlice({
    name: 'userSlice',
    initialState: userInitState,
    reducers: {
        loadUsers: (state, action:PayloadAction<IUser[]>) => {
            state.users = action.payload;
        },
        loadUser: (state, action:PayloadAction<IUser>) => {
            state.user = action.payload;
        }
    }
});

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer
    }
});



export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();