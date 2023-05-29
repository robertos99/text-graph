from dataclasses import dataclass
from flask import  Blueprint, jsonify, request


atlop_blueprint = Blueprint('atlop', __name__)

@dataclass
class TextData:
    text: str

@atlop_blueprint.route('/aimodel/atlop/analyze', methods=['POST'])
def analyze_document():
    text_data = TextData(**request.get_json())

    if not text_data.text:
        return jsonify({'message': 'No text provided'}), 400

    # Process the text or perform any desired operations
    # ...

    return jsonify({'message': 'Text posted successfully'})
