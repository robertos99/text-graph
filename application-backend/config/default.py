import os

class Config:
    DB_HOST = 'localhost'
    DB_PORT = '5555'
    DB_DATABASE = 'mydatabase'
    DB_USER = 'postgres'
    DB_PASSWORD = 'password'
    SQLALCHEMY_DATABASE_URI = 'postgresql://' + DB_USER + ':' + DB_PASSWORD + '@' + DB_HOST + ':' + DB_PORT + '/' + DB_DATABASE
    SQLALCHEMY_TRACK_MODIFICATIONS = False
