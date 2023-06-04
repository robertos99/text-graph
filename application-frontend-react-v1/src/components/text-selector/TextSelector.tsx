import { Typography, TextareaAutosize, Button } from '@mui/material';
import {useState} from "react";

interface TextSelectorProps {
    title: string;
    text: string;
    onAnalyzeSelectedText: (text: string) => void
}

const TextSelector: React.FC<TextSelectorProps> = ({ title, text , onAnalyzeSelectedText}) => {
    const [selectedText, setSelectedText] = useState('');

    const handleTextSelection = () => {
        const selectedText = window.getSelection()?.toString() || '';
        setSelectedText(selectedText);
    };

    const analyzeSelectedText = () => {
        onAnalyzeSelectedText(selectedText)
        setSelectedText('');
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                {title}
            </Typography>
            <TextareaAutosize
                value={text}
                readOnly
                onClick={handleTextSelection}
                aria-label="Text"
                rowsmin={5}
                style={{ width: '100%', minHeight: '200px', resize: 'vertical', padding: '8px', marginBottom: '16px' }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={analyzeSelectedText}
                disabled={!selectedText}
                style={{ marginBottom: '16px' }}
            >
                Analyze Selected Text
            </Button>
            {selectedText && (
                <div>
                    <Typography variant="h6" gutterBottom>
                        Selected Text:
                    </Typography>
                    <Typography variant="body1">{selectedText}</Typography>
                </div>
            )}
        </div>
    );
};

export default TextSelector;
