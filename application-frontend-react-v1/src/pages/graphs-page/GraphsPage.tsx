import  { useEffect, useState } from 'react';
import GraphContainer from '../../components/Graph/GraphContainer';
import DocumentSelectorGrid from './DocumentSelectorGrid/DocumentSelectorGrid';
import DocumentCardLink from './DocumentSelectorGrid/DocumentCardLink';
import ContentRouteWrapper from '../../routes/ContentRouteWrapper';
import {ROUTE_VARIABLES, ROUTES} from "../../routes/RouteConfig";
import Document from '../../models/Document'



export default function GraphsPage() {
    const [documents, setDocuments] = useState<Document[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/documents')
            .then((response) => response.json())
            .then((data: Document[]) => setDocuments(data))
            .catch((error) => console.error('Error fetching documents:', error));
    }, []);

    return (
            <div style={{ width: '90%', marginTop: '3%', marginBottom: '0%', paddingLeft: '5%' }}>
                <DocumentSelectorGrid>
                    {documents.map((document) => (
                        <DocumentCardLink key={document.id} to={`${ROUTES.GRAPH_DOCUMENT.replace(`:${ROUTE_VARIABLES.DOCUMENT_ID}`, document.id.toString())}`}>
                            {document.title}
                            <GraphContainer />
                        </DocumentCardLink>
                    ))}
                </DocumentSelectorGrid>
            </div>
    );
}