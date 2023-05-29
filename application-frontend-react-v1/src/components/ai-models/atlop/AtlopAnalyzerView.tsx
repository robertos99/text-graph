import TextSelector from "./TextSelector";
import GraphContainer from "../../graph/GraphContainer";
import Document from "../../../models/Document";
import './ans.css'
import AtlopAnalyzerApi from "../../../api/AtlopAnalyzerApi.tsx";
interface AnalyzerViewProps {
    document: Document,
}

export default function AtlopAnalyzerView({document}: AnalyzerViewProps) {
    console.log(document)
    const analyzeSelectedTextHandler = (text: string) => {
        AtlopAnalyzerApi.analyzeText(text)
    }
    return (
        <div style={{display: 'flex'}}>
            <div style={{width: '40%', height: '480px'}} className={"overflowY"}>
                <TextSelector title={document.title}
                              text={document.text}
                              onAnalyzeSelectedText={analyzeSelectedTextHandler}/>
            </div>
            <div style={{height: '480px', width: '100%'}}>
                <GraphContainer/>
            </div>
        </div>
    )
}