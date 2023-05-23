from .default import Config

class DevelopmentConfig(Config):
    # Development specific configurations
    DEBUG = True
    # SQLALCHEMY_DATABASE_URI = 'postgresql://...'
