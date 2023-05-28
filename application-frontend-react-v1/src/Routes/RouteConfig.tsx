// routes.js
export const ROUTE_VARIABLES = {
    DOCUMENT_ID: 'documentId',
};

export const ROUTES = {
    HOME: '/',
    UPLOAD: '/upload',
    GRAPHS: '/graphs',
    GRAPH_DOCUMENT: `/graphs/document/:${ROUTE_VARIABLES.DOCUMENT_ID}`,
};
