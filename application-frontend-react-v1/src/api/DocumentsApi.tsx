import {FormData} from "../pages/upload-page/MultiStepper/MultiStepper";

export default class DocumentsApi {
    static fetchDocuments(): Promise<Document[]> {
        return fetch('http://localhost:5000/documents')
            .then((response) => response.json())
            .catch((error) => {
                console.error('Error fetching documents:', error);
                throw error;
            });
    }

    static createDocument(data: FormData): Promise<Document> {
        return fetch('http://localhost:5000/documents', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: data.documentTitle,
                text: data.documentBody,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to create document');
                }
                return response.json();
            })
            .catch((error) => {
                console.error('Error creating document:', error);
                throw error;
            });
    }
}