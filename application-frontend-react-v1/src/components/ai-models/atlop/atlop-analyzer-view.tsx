import TextAnalyzer from "./text-selector";
import GraphContainer from "../../Graph/GraphContainer";
import * as React from "react";
import {useParams} from "react-router-dom";
import {ROUTE_VARIABLES} from "../../../Routes/RouteConfig"

export default function AtlopAnalyzerView({}) {
    const id= useParams()[ROUTE_VARIABLES.DOCUMENT_ID];
    console.log(id)

    return (
        <div style={{display: 'flex'}}>
            <div style={{width: '40%'}}>
                <TextAnalyzer title={"title"} text={"content"} />
            </div>
            <div style={{height: '480px', width: '100%'}}>
                <GraphContainer/>
            </div>
        </div>
    )
}