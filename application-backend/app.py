from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from database.db import db
from domain.document.routes import document_blueprint


def create_app(config=None):
    app = Flask(__name__)
    if config is None:
        # Use a default config when no argument is provided
        from config.default import Config
        app.config.from_object(Config)
    else:
        app.config.from_object(config)

    CORS(app)
    db.init_app(app)
    Migrate(app, db)

    app.register_blueprint(document_blueprint)

    return app


if __name__ == '__main__':
    from config.development import DevelopmentConfig

    app = create_app(DevelopmentConfig)
    app.run()
