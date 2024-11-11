import {configureStore, createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";

// Users

type UserSliceType = {
    users: IUser[],
    user: IUser | null
}

const userInitState: UserSliceType = {
    users: [],
    user: null
}

//Posts

type PostSliceType = {
    posts: IPost[],
    post: IPost | null
}

const postInitState: PostSliceType = {
    posts: [],
    post: null
}


// ----------------------------------- Async Functions

const loadUsers = createAsyncThunk('userSlice/loadUsers', async (_, thunkAPI) => {
    try {
        // This "fetch" ideally should be an axios in a separate service
        const usersFromAPI = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json());
        return thunkAPI.fulfillWithValue(usersFromAPI);
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});

const loadUser = createAsyncThunk('userSlice/loadUser', async (id: number, thunkAPI) => {
    try {
        let user = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(value => value.json());
        return thunkAPI.fulfillWithValue(user);
    } catch (e) {
        thunkAPI.rejectWithValue(e);
    }

});

const loadPosts = createAsyncThunk('postSlice/loadPosts', async (_, thunkAPI) => {
    try {
        const postsFromAPI = await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json());
        return thunkAPI.fulfillWithValue(postsFromAPI);
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});

const loadPost = createAsyncThunk('postSlice/loadPost', async (id:number, thunkAPI) => {
    try {
        const postsFromAPI = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
            .then(value => value.json());
        return thunkAPI.fulfillWithValue(postsFromAPI);
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});

// User slice

let userSlice = createSlice({
    name: 'userSlice',
    initialState: userInitState,
    reducers: {
        placeholderFn: () => {
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                state.users = action.payload;
            })
            .addCase(loadUsers.rejected, (state, action: PayloadAction<any>) => {
                console.log(action.payload);
            })
            .addCase(loadUser.fulfilled, (state, action: PayloadAction<IUser>) => {
                state.user = action.payload;
            })
            .addCase(loadUser.rejected, (state, action: PayloadAction<any>) => {
                //     .....
            })
            .addMatcher(isRejected(loadUsers, loadUser), (state, action) => {
            //     .... some error log
            })
            .addMatcher(isFulfilled(loadUsers, loadUser), (state, action) => {
            //     .... some action
            })
});

// Post slice

let postSlice = createSlice({
    name: 'postSlice',
    initialState: postInitState,
    reducers: {
        placeholderFn: () => {
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action:PayloadAction<IPost[]>) => {
                state.posts = action.payload;
            })
            .addCase(loadPosts.rejected, (state, action:PayloadAction<any>) => {
                console.log('error - ', action.payload)
            })
            .addCase(loadPost.fulfilled, (state, action:PayloadAction<IPost[]>) => {
                state.posts = action.payload;
            })
            .addCase(loadPost.rejected, (state, action:PayloadAction<any>) => {
                console.log('error - ', action.payload)
            })
})

export const userSliceActions = {
    ...userSlice.actions,
    loadUsers,
    loadUser
};

export const postSliceActions = {
    ...postSlice.actions,
    loadPosts,
    loadPost
}

export let store = configureStore({
    reducer: {
        userReducer: userSlice.reducer,
        postReducer: postSlice.reducer
    }
});

export let useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export let useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();