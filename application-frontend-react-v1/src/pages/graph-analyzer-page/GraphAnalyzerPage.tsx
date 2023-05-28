import ContentRouteWrapper from "../../routes/ContentRouteWrapper";
import {Card} from "@mui/material";
import GraphContainer from "../../components/Graph/GraphContainer";
import * as React from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import TextAnalyzer from "../../components/ai-models/atlop/text-selector";
import AtlopAnalyzerView from "../../components/ai-models/atlop/atlop-analyzer-view";
import {ROUTE_VARIABLES} from "../../routes/RouteConfig";
import {useEffect, useState} from "react";
import DocumentsApi from "../../api/DocumentsApi";


export default function GraphAnalyzerPage() {
    const id = useParams<number>()[ROUTE_VARIABLES.DOCUMENT_ID];
    console.log('render')
    const [document, setDocument] = useState<Document | null>(null);

    useEffect(() => {
        const fetchDocument = async () => {
            try {
                const data = await DocumentsApi.getDocument(id);
                setDocument(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchDocument();
    }, []);

    return (

            <Card sx={{mt: 3, height: '500px', width: '1000px', padding: 2}}>
                {
                    document && <AtlopAnalyzerView document={document}/>
                }
            </Card>

    )
}