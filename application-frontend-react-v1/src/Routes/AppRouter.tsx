import * as React from 'react'
import UploadPage from "../pages/UploadPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./Layout";
import GraphsPage from "../pages/GraphsPage";
import GraphContainer from "../components/Graph/GraphContainer";
import ContentRouteWrapper from "./ContentRouteWrapper";
import {Card} from "@mui/material";
import GraphAnalyzerPage from "../pages/GraphAnalyzerPage";
import {ROUTES, ROUTE_VARIABLES} from "./RouteConfig"

function AppRouter() {
    return (
        <Router>
            <Routes>
                {/* Layout as parent route is for sharing common style for all routes (sidenav).
                    Layout has an <Outlet> for all subroutes content.*/}
                <Route path={ROUTES.HOME} element={<Layout />}>
                    <Route path={ROUTES.UPLOAD} element={
                        <ContentRouteWrapper>
                            <UploadPage/>
                        </ContentRouteWrapper>
                    } />
                    <Route path={ROUTES.GRAPHS} element={
                        <ContentRouteWrapper>
                            <GraphsPage/>
                        </ContentRouteWrapper>
                    } />
                    <Route path={ROUTES.GRAPH_DOCUMENT} element={
                        <ContentRouteWrapper>
                            <GraphAnalyzerPage/>
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
