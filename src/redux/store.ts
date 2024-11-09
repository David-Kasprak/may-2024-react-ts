import {configureStore, createSlice} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

let userSlice = createSlice({
    name: 'userSlice',
    initialState: null,
    reducers: {}
});


export let store = configureStore({
    reducer: {
        userReducer: {userSlice.reducer}
    }
});

let useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
let useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();