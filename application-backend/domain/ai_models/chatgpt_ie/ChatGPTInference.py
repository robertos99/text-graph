import openai
import json
import re



class ChatGPTInference:
    def __init__(self):
        # openai.api_key = os.getenv("OPENAI_API_KEY")
        openai.api_key = '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'
        self.context = "extract the relationships out of this document. respon with a json, where the nodes are the entitys and the edges the relationships between the entitys. make sure to do coreference resolution. the goal is to display the json in a graph later on.\nmake sure each entity gets a unique id. the edges should then reference the correpsoing ids. the edges should have a head entity and a tail entity. \n\nthe document:\n"


    def extract_information(self, text):
        '''
        :param text:
        :return: json with nodes and edges
        '''
        prompt = self.context + text
        response = openai.Completion.create(
            model="text-davinci-003",
            prompt=prompt,
            temperature=0,
            max_tokens=1924,
            top_p=1,
            frequency_penalty=0,
            presence_penalty=0
        )

        response_json = response.choices[0].text
        python_object = json.loads(response_json)
        return python_object
