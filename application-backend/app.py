from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from database.db import create_session
from domain.document.routes import document_blueprint
from domain.ai_models.atlop.routes import atlop_blueprint
from domain.ai_models.chatgpt_ie.routes import chatpgt_ie_blueprint


def create_app(config=None):
    app = Flask(__name__)
    if config is None:
        # Use a default config when no argument is provided
        from config.default import Config
        app.config.from_object(Config)
    else:
        app.config.from_object(config)

    CORS(app)
    db_session = create_session(app)
    Migrate(app, db_session)

    app.register_blueprint(document_blueprint)
    app.register_blueprint(atlop_blueprint)
    app.register_blueprint(chatpgt_ie_blueprint)

    return app


if __name__ == '__main__':
    from config.development import DevelopmentConfig

    app = create_app(DevelopmentConfig)
    app.run()
