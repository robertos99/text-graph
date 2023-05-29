import * as React from 'react';
import {Drawer, Tabs} from '@mui/material';
import CustomTabLink from "./util/CustomTabLink";
import {ROUTES} from "../../routes/RouteConfig";
import {useState} from "react";


const SideNavigation = () => {
    const [selectedTab, setSelectedTab] = useState<number>(0);
    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };
    console.log(selectedTab)
    return (
        <Drawer variant="permanent" anchor="left">
           <div style={{display: 'flex', flexDirection: 'column'}}>
                <CustomTabLink to={ROUTES.UPLOAD} label={'Upload'}/>
                <CustomTabLink to={ROUTES.GRAPHS} label={'Graphs'}/>
           </div>
        </Drawer>
    );
};
export default SideNavigation;



