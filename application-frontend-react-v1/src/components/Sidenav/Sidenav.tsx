import * as React from 'react';
import {Drawer, Tabs} from '@mui/material';
import CustomTabLink from "./Util/CustomTabLink";


const SideNavigation = ({ selectedTab, handleTabChange }) => {
    return (
        <Drawer variant="permanent" anchor="left">
            <Tabs value={selectedTab} orientation="vertical" onChange={handleTabChange}>
                <CustomTabLink to={'upload'} label={'Upload'}/>
                <CustomTabLink to={'graphs'} label={'Graphs'}/>
            </Tabs>
        </Drawer>
    );
};
export default SideNavigation;



