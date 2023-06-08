import GraphContainer from "../../graph/GraphContainer";
import Document from "../../../models/Document";
import ChatGPTIEAnalyzerAPI from "../../../api/ChatGPTIEAnalyzerAPI.tsx";
import {useState} from "react";
import TextSelector from "../../text-selector/TextSelector";
import './ans.css'

interface AnalyzerViewProps {
    document: Document,
}

export default function ChatGPTIEAnalyzerView({document}: AnalyzerViewProps) {
    const [analyzedDoc, setAnalyzedDoc] = useState<Graph | null>(null)

    const analyzeSelectedTextHandler = (text: string) => {
        const fetchData = async () => {
            const result = await ChatGPTIEAnalyzerAPI.analyzeText(text)
            setAnalyzedDoc(result)
        }

        // call the function
        fetchData()
    }

    return (

        <div style={{display: 'flex'}}>
            <div style={{width: '40%', height: '480px'}} className={"overflowY"}>
                <TextSelector title={document.title}
                              text={document.text}
                              onAnalyzeSelectedText={analyzeSelectedTextHandler}/>
            </div>
            <div style={{height: '480px', width: '100%'}}>
                {analyzedDoc && <GraphContainer nodes={analyzedDoc.nodes} edges={analyzedDoc.edges}/>}
            </div>
        </div>
    )
}