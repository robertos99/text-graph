import  { useEffect, useState } from 'react';
import GraphContainer from '../../components/Graph/GraphContainer';
import DocumentSelectorGrid from './DocumentSelectorGrid/DocumentSelectorGrid';
import DocumentCardLink from './DocumentSelectorGrid/DocumentCardLink';
import ContentRouteWrapper from '../../routes/ContentRouteWrapper';
import {ROUTE_VARIABLES, ROUTES} from "../../routes/RouteConfig";
import Document from '../../models/Document'
import DocumentsApi from "../../api/DocumentsApi";



export default function GraphsPage() {
    const [documents, setDocuments] = useState<Document[]>([]);

    useEffect(() => {
        DocumentsApi.fetchDocuments()
            .then((data: Document[]) => setDocuments(data))
            .catch((error) => console.error('Error fetching documents:', error));
    }, []);

    return (
            <div style={{ width: '90%', marginTop: '3%', marginBottom: '0%', paddingLeft: '5%' }}>
                <DocumentSelectorGrid>
                    {documents.map((document) => (
                        <DocumentCardLink key={document.id} to={`${ROUTES.GRAPH_DOCUMENT.replace(`:${ROUTE_VARIABLES.DOCUMENT_ID}`, document.id.toString())}`}>
                            <h3 style={{textDecoration: 'underline'}}>{document.title}</h3>
                            <div style={{fontSize: '11px', paddingLeft: 12, paddingRight:12}}>{document.text}</div>
                        </DocumentCardLink>
                    ))}
                </DocumentSelectorGrid>
            </div>
    );
}