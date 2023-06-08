import openai
import json
import re
import os
class ChatGPTInference:
    def __init__(self):
        # openai.api_key =
        openai.api_key = os.environ.get('OPEN_AI_KEY')
        self.context1 = "extract the relationships out of this document. respon with a json, where the nodes are the entitys and the edges the relationships between the entitys. make sure to do coreference resolution. the goal is to display the json in a graph later on.\nmake sure each entity gets a unique id. the edges should then reference the correpsoing ids. the edges should have a head entity and a tail entity and their relationship. \n\nthe document:\n"

        self.context2 = '''
        extract the relationships out of this document. 
        respon with a json, where the nodes are the entitys and the edges the relationships between the entitys. 
        make sure to do coreference resolution. the goal is to display the json in a graph later on.
        make sure each entity gets a unique id. the edges should then reference the correpsoing ids. the edges should have a head entity and a tail entity and their relationship between each other as a label. 
        \n\n
        the document:\n
        '''

        self.context3 = '''
               extract the relationships out of this document. 
               respon with a json, where the nodes are the entitys and the edges the relationships between the entitys. 
               make sure to do coreference resolution. the goal is to display the json in a graph later on.
               make sure each entity gets a unique id. the edges should then reference the correpsoing ids. the edges should have a head entity and a tail entity and their relationship between each other as a label. 
               \n
               \n
               the document:\n
               '''

        self.context  = '''
        extract the relationships out of this document. respon with a json, where the nodes are the entitys and the edges the relationships between the entitys. make sure to do coreference resolution. the goal is to display the json in a graph later on. make sure each entity gets a unique id and a label containing the name of the entity. the edges should then reference the correpsoing ids. the edges should have a head entity and a tail entity and their relationship between each other as a label. \n     
        the document:
        '''

    def extract_information(self, text):
        '''
        :param text:
        :return: dict with nodes and edges {nodes: [], edges: []}
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
