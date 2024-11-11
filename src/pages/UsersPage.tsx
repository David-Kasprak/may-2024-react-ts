import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector, userSliceActions} from "../redux/store";

const UsersPage = () => {
    let {users, user} = useAppSelector(state => state.userReducer);
    let dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(userSliceActions.loadUsers());
    }, []);
    return (
        <div>
            {users.map((user) => (<div key={user.id}>{user.username}</div>))}
        </div>
    );
};

export default UsersPage;