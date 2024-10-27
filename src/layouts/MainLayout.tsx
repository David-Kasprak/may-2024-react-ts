import React from 'react';
import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu";

const MainLayout = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
            <footer>
                <hr/>
                <p>Footer</p>
            </footer>
            </div>
    );
};

export default MainLayout;