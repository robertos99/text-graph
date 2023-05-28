import ContentRouteWrapper from "./ContentRouteWrapper";
import {Card} from "@mui/material";
import GraphContainer from "../components/Graph/GraphContainer";
import * as React from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import TextAnalyzer from "../components/ai-models/atlop/text-selector";
import AtlopAnalyzerView from "../components/ai-models/atlop/atlop-analyzer-view";


export default function GraphDocumentRoute() {

    return (

        <ContentRouteWrapper>
            <Card sx={{mt: 3, height: '500px', width: '1000px', padding: 2}}>
                <AtlopAnalyzerView/>
            </Card>
        </ContentRouteWrapper>
    )
}