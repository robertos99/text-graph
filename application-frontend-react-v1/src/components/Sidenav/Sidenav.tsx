import * as React from 'react';
import {Drawer, Tabs} from '@mui/material';
import CustomTabLink from "./Util/CustomTabLink";
import {ROUTES} from "../../Routes/RouteConfig";


const SideNavigation = ({ selectedTab, handleTabChange }) => {
    return (
        <Drawer variant="permanent" anchor="left">
            <Tabs value={selectedTab} orientation="vertical" onChange={handleTabChange}>
                <CustomTabLink to={ROUTES.UPLOAD} label={'Upload'}/>
                <CustomTabLink to={ROUTES.GRAPHS} label={'Graphs'}/>
            </Tabs>
        </Drawer>
    );
};
export default SideNavigation;



