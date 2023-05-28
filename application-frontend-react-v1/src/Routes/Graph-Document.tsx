import ContentRouteWrapper from "./ContentRouteWrapper";
import {Card} from "@mui/material";
import GraphContainer from "../components/Graph/GraphContainer";
import * as React from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import TextAnalyzer from "../components/ai-models/atlop/text-selector";


export default function GraphDocumentRoute() {
    const { id } = useParams();
    console.log(id)


    return (

        <ContentRouteWrapper>
            <Card sx={{mt: 3, height: '500px', width: '1000px', padding: 2}}>
                <div style={{display: 'flex'}}>
                    <div style={{width: '40%'}}>
                        <TextAnalyzer title={"title"} text={"content"} />
                    </div>
                    <div style={{height: '480px', width: '100%'}}>
                        <GraphContainer/>
                    </div>
                </div>
            </Card>

        </ContentRouteWrapper>
    )
}