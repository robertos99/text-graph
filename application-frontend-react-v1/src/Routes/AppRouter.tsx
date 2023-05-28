import * as React from 'react'
import UploadRoute from "./UploadRoute";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./Layout";
import GraphsRoute from "./GraphsRoute";
import GraphContainer from "../components/Graph/GraphContainer";
import ContentRouteWrapper from "./ContentRouteWrapper";
import {Card} from "@mui/material";
import GraphDocumentRoute from "./Graph-Document";
import {ROUTES, ROUTE_VARIABLES} from "./RouteConfig"

function AppRouter() {
    return (
        <Router>
            <Routes>
                {/* Layout as parent route is for sharing common style for all routes (sidenav).
                    Layout has an <Outlet> for all subroutes content.*/}
                <Route path={ROUTES.HOME} element={<Layout />}>
                    <Route path={ROUTES.UPLOAD} element={<UploadRoute/>} />
                    <Route path={ROUTES.GRAPHS} element={<GraphsRoute/>} />
                    <Route path={ROUTES.GRAPH_DOCUMENT} element={
                        <GraphDocumentRoute/>
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
