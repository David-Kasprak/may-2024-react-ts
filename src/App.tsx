import React, {FC, useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {loadUsers} from "./redux/slices/user_slice";

const App: FC = () => {
    
    let userSliceState = useAppSelector(state => state.userSlice);
    let dispatch = useAppDispatch();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                dispatch(loadUsers(value))
            });
    })
    
  return (
     <>
         {
             userSliceState.users.map((user) => (<div key={user.id}>{user.username}</div>))
         }
     </>
  );
}

export default App;