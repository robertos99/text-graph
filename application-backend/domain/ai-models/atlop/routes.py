from flask import  Blueprint, jsonify, request
from .model import db, Document

atlop_blueprint = Blueprint('atlop', __name__)

@atlop_blueprint.route('/analyze', methods=['POST'])
def analyze_document():
    data = request.get_json()
    document = Document(title=data['title'], text=data['text'])
    db.session.add(document)
    db.session.commit()
    return jsonify(document.to_dict()), 201

@atlop_blueprint.route('/documents', methods=['GET'])
def get_all_documents():
    documents = Document.query.all()
    return jsonify([document.to_dict() for document in documents])

@atlop_blueprint.route('/documents/<int:document_id>', methods=['GET'])
def get_document(document_id):
    document = Document.query.get(document_id)
    if not document:
        return jsonify({'message': 'Document not found'}), 404
    return jsonify(document.to_dict())

@atlop_blueprint.route('/documents/<int:document_id>', methods=['PUT'])
def update_document(document_id):
    document = Document.query.get(document_id)
    if not document:
        return jsonify({'message': 'Document not found'}), 404

    data = request.get_json()
    document.title = data.get('title', document.title)
    document.text = data.get('text', document.text)

    db.session.commit()
    return jsonify(document.to_dict())

@atlop_blueprint.route('/documents/<int:document_id>', methods=['DELETE'])
def delete_document(document_id):
    document = Document.query.get(document_id)
    if not document:
        return jsonify({'message': 'Document not found'}), 404

    db.session.delete(document)
    db.session.commit()
    return jsonify({'message': 'Document deleted'})
