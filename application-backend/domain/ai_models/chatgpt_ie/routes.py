from dataclasses import dataclass
from flask import  Blueprint, jsonify, request
from .ChatGPTInference import ChatGPTInference
chatpgt_ie_blueprint = Blueprint('chatgpt-ie', __name__)

@dataclass
class TextData:
    text: str

@chatpgt_ie_blueprint.before_app_request
def initialize_class():
    # Initialize your class here
    # For example:
    global chatgpt_ie_instance
    chatgpt_ie_instance = ChatGPTInference()


@chatpgt_ie_blueprint.route('/aimodel/chatgpt-ie/analyze', methods=['POST'])
def analyze_document():
    text_data = TextData(**request.get_json())

    if not text_data.text:
        return jsonify({'message': 'No text provided'}), 400

    global chatgpt_ie_instance

    result = chatgpt_ie_instance.extract_information(text_data.text)
    return jsonify(result)
