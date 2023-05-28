import * as React from 'react'
import MultiStepper from "../components/MultiStepper/MultiStepper";
import {Card} from "@mui/material";
import ContentRouteWrapper from "../Routes/ContentRouteWrapper";


export default function UploadPage() {
    return (
                    <div style={{width: '100%', marginTop: '7%'}}>
                        <Card>
                            <MultiStepper/>
                        </Card>
                    </div>
    )
}

