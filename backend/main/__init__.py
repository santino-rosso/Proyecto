import os
from flask import Flask
from dotenv import load_dotenv
from flask_restful import Api #Agrego la clase API

#Importo dir de recursos
import main.resources as resources

#Inicio Restful
api = Api()

#Módulo que inicializara la app y todos los modulos
def create_app():
#Inicio flask
    app = Flask (__name__)
#variables de entorno
    load_dotenv()
    api.add_resource(resources.UsuariosResource, '/usuarios')
    #cargar a la API el recurso Animal y especificar la ruta 
    api.add_resource(resources.UsuarioResource, '/usuario/<id>')
    
#Iniciaremos los modulos de la app 
#retornamos la app inicializada
    api.init_app(app)
    return app