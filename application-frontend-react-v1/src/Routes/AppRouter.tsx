import * as React from 'react'
import UploadRoute from "./UploadRoute";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./Layout";
import GraphsRoute from "./GraphsRoute";
import GraphContainer from "../components/Graph/GraphContainer";
import ContentRouteWrapper from "./ContentRouteWrapper";
import {Card} from "@mui/material";




function AppRouter() {
    return (
        <Router>
            <Routes>
                {/* Layout as parent route is for sharing common style for all routes (sidenav).
                    Layout has an <Outlet> for all subroutes content.*/}
                <Route path="/" element={<Layout />}>
                    <Route path="upload" element={<UploadRoute/>} />
                    <Route path="graphs" element={<GraphsRoute/>} />
                    <Route path="graphs/document/:index" element={
                        <ContentRouteWrapper>
                            <Card sx={{mt: 3, height: '500px', width: '1000px', padding: 2}}>
                                <div style={{height: '100%', width: '100%'}}>
                                    <GraphContainer/>
                                </div>
                            </Card>

                        </ContentRouteWrapper>
                    }/>
                    {
                        //<Route path="/item/:index" component={ItemDetails} />
                    }
                </Route>

            </Routes>
        </Router>
    );
}


export default AppRouter;
