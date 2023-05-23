import SideNavigation from "../components/Sidenav/Sidenav";
import * as React from "react";
import {Outlet} from 'react-router-dom';

export default function Layout() {
    const selectedTab = ()=> {}
    const handleTabChange = ()=> {}
    return (
        <>
            <div style={{display: 'flex', paddingTop: 0}}>
                <SideNavigation selectedTab={selectedTab} handleTabChange={handleTabChange} />
                <Outlet/>
            </div>
        </>
    )
}