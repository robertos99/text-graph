import ContentRouteWrapper from "./ContentRouteWrapper";
import {Card} from "@mui/material";
import GraphContainer from "../components/Graph/GraphContainer";
import * as React from "react";
import { Routes, Route, useParams } from 'react-router-dom';


export default function GraphDocumentRoute() {
    const { id } = useParams();
    console.log(id)


    return (

        <ContentRouteWrapper>
            <Card sx={{mt: 3, height: '500px', width: '1000px', padding: 2}}>
                <div style={{height: '100%', width: '100%'}}>
                    <GraphContainer/>
                </div>
            </Card>

        </ContentRouteWrapper>
    )
}