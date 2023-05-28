import SideNavigation from "../components/Sidenav/Sidenav";
import * as React from "react";
import {Outlet} from 'react-router-dom';

export default function Layout() {

    return (
        <>
            <div style={{display: 'flex', paddingTop: 0}}>
                <SideNavigation/>
                <Outlet/>
            </div>
        </>
    )
}