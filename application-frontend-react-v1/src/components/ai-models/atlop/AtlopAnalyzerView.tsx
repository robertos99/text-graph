import TextSelector from "./TextSelector";
import GraphContainer from "../../graph/GraphContainer";
import * as React from "react";
import Document from "../../../models/Document";
import './ans.css'
interface AnalyzerViewProps {
    document: Document,
}

export default function AtlopAnalyzerView({document}: AnalyzerViewProps) {
    console.log(document)
    return (
        <div style={{display: 'flex'}}>
            <div style={{width: '40%', height: '480px'}} className={"overflowY"}>
                <TextSelector title={document.title} text={document.text} />
            </div>
            <div style={{height: '480px', width: '100%'}}>
                <GraphContainer/>
            </div>
        </div>
    )
}