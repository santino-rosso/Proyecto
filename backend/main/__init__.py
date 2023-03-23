import os
from flask import Flask
from dotenv import load_dotenv

#Módulo que inicializara la app y todos los modulos
def create_app():
#Inicio flask
    app = Flask (__name__ )

#variables de entorno
    load_dotenv()

#Iniciaremos los modulos de la app 
#retornamos la app inicializada
    return app.py