export default class ChatGPTIEAnalyzerAPI {
    static async analyzeText(textData: string): Promise<Graph> {
        const data: TextData = {text: textData}
        try {
          const response = await fetch('http://localhost:5000/aimodel/chatgpt-ie/analyze', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
    
          if (!response.ok) {
            throw new Error('Request failed');
          }
    
        return await response.json();
        } catch (error) {
          throw new Error('Request failed');
        }
  }
}

interface TextData {
  text: string;
}
