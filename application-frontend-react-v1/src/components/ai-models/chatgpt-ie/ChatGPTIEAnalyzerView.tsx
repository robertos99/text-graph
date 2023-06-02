import GraphContainer from "../../graph/GraphContainer";
import Document from "../../../models/Document";
import './ans.css'
import ChatGPTIEAnalyzerAPI from "../../../api/ChatGPTIEAnalyzerAPI.tsx";
import {useEffect, useState} from "react";

interface AnalyzerViewProps {
    document: Document,
}

export default function ChatGPTIEAnalyzerView({document}: AnalyzerViewProps) {
    console.log(document)
    const [analyzedDoc, setAnalyzedDoc] = useState(null)

    useEffect(()=> {
         const fetchData = async () => {
                const result = await ChatGPTIEAnalyzerAPI.analyzeText(document.text)
                setAnalyzedDoc(result)
         }

            // call the function
            fetchData()
            // make sure to catch any error
            .catch(console.error);
    },[])

    return (
        <div style={{display: 'flex'}}>
            <div style={{height: '480px', width: '100%'}}>
                {analyzedDoc && <GraphContainer/>}
            </div>
        </div>
    )
}