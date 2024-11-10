import React, {FC, useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector, userSliceActions} from "./redux/store";

const App: FC = () => {
    let {users, user} = useAppSelector(state => state.userReducer);
    let dispatch = useAppDispatch();

    useEffect(() => {
        // dispatch(userSliceActions.loadUsers());
        dispatch(userSliceActions.loadUser(1));
    }, []);

  return (
     <>
         {/*To map the users, the "dispatch" in 10th line is required*/}
         {users.map((user) => (<div key={user.id}>{user.username}</div>))},
         {user && <div>{JSON.stringify(user)}</div>}
     </>
  );
}

export default App;