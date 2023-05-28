import { Typography, TextareaAutosize, Button } from '@mui/material';
import {useState} from "react";

interface TextAnalyzerProps {
    title: string;
    text: string;
}

const TextAnalyzer: React.FC<TextAnalyzerProps> = ({ title, text }) => {
    const [selectedText, setSelectedText] = useState('');

    const handleTextSelection = () => {
        const selectedText = window.getSelection()?.toString() || '';
        setSelectedText(selectedText);
    };

    const analyzeSelectedText = () => {
        // Send the selectedText to the backend for analysis
        // You can make an API request here to your Flask backend

        // Reset the selected text after analysis
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
            <div>
                <Typography variant="h6" gutterBottom>
                    Full Text:
                </Typography>
                <Typography variant="body1">{text}</Typography>
            </div>
        </div>
    );
};

export default TextAnalyzer;
