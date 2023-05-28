import TextAnalyzer from "./text-selector";
import GraphContainer from "../../Graph/GraphContainer";
import * as React from "react";
import Document from "../../../models/Document";

interface AnalyzerViewProps {
    document: Document,
}

export default function AtlopAnalyzerView({document}: AnalyzerViewProps) {
    console.log(document)
    return (
        <div style={{display: 'flex'}}>
            <div style={{width: '40%'}}>
                <TextAnalyzer title={document.title} text={document.text} />
            </div>
            <div style={{height: '480px', width: '100%'}}>
                <GraphContainer/>
            </div>
        </div>
    )
}