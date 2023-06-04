import ContentRouteWrapper from "../../routes/ContentRouteWrapper";
import {Card} from "@mui/material";
import * as React from "react";
import { useParams } from 'react-router-dom';
import {ROUTE_VARIABLES} from "../../routes/RouteConfig";
import {useEffect, useState} from "react";
import DocumentsApi from "../../api/DocumentsApi";
import ChatGPTIEAnalyzerView from "../../components/ai-models/chatgpt-ie/ChatGPTIEAnalyzerView";


export default function GraphAnalyzerPage() {
    const id = useParams<number>()[ROUTE_VARIABLES.DOCUMENT_ID];
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
                    //document && <AtlopAnalyzerView document={document}/>
                    document && <ChatGPTIEAnalyzerView document={document}/>
                }
            </Card>

    )
}