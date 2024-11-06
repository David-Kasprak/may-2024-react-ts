import React, {FC} from 'react';
import './App.css';
import {useAppSelector} from "./redux/store";

const App: FC = () => {
    
    let userSliceState = useAppSelector(state => state.userSlice);
    
  return (
     <>
         {
             userSliceState.users.map((user) => (<div key={user.id}>{user.username}</div>))
         }
     </>
  );
}

export default App;