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
    load_dotenv()

    api.add_resource(resources.UsuariosResource, '/usuarios')
    api.add_resource(resources.UsuarioResource, '/usuario/<id>')
    api.add_resource(resources.UsuariosAlumnosResource, '/usuarios_alumnos')
    api.add_resource(resources.UsuarioAlumnoResource, '/usuario_alumno/<id>')
    api.add_resource(resources.UsuarioProfesorResource, '/usuario_profesor/<id>')
    api.add_resource(resources.PlanificacionAlumnoResource, '/planificacion_alumno/<id>')
    api.add_resource(resources.PlanificacionProfesorResource, '/planificacion_profesor/<id>')
    api.add_resource(resources.PlanificacionesProfesoresResource, '/planificaciones_profesores')
    api.add_resource(resources.ProfesoresResource, '/profesores')
    api.add_resource(resources.PagoResource, '/pago/<id>')
    api.add_resource(resources.LoginResource, '/login')
#Iniciaremos los modulos de la app 
#retornamos la app inicializada
    api.init_app(app)
    return app