import  { useEffect, useState } from 'react';
import GraphContainer from '../components/Graph/GraphContainer';
import DocumentSelectorGrid from '../components/DocumentSelectorGrid/DocumentSelectorGrid';
import ItemCardLink from '../components/DocumentSelectorGrid/ItemCardLink';
import ContentRouteWrapper from './ContentRouteWrapper';

interface Document {
    id: number;
    title: string;
    text: string;
}


export default function GraphsRoute() {
    const [documents, setDocuments] = useState<Document[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/documents')
            .then((response) => response.json())
            .then((data: Document[]) => setDocuments(data))
            .catch((error) => console.error('Error fetching documents:', error));
    }, []);

    return (
        <ContentRouteWrapper>
            <div style={{ width: '90%', marginTop: '3%', marginBottom: '0%', paddingLeft: '5%' }}>
                <DocumentSelectorGrid>
                    {documents.map((document) => (
                        <ItemCardLink key={document.id} to={`/graphs/document/${document.id}`}>
                            {document.title}
                            <GraphContainer />
                        </ItemCardLink>
                    ))}
                </DocumentSelectorGrid>
            </div>
        </ContentRouteWrapper>
    );
}