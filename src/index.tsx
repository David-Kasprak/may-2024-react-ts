import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {RouterProvider} from "react-router-dom";
import {routes} from "./routes/routes";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        {/*todo - delete the line below when certain that is is not required*/}
        {/*<App />*/}
        <RouterProvider router={routes}/>
    </Provider>
);
