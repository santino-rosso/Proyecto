import os
from flask import Flask
from dotenv import load_dotenv
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


api = Api()
db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask (__name__)
    load_dotenv()

    if not os.path.exists(os.getenv('DATABASE_PATH')+os.getenv('DATABASE_NAME')):
        os.mknod(os.getenv('DATABASE_PATH')+os.getenv('DATABASE_NAME'))

    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    #Url de configuración de base de datos
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////'+os.getenv('DATABASE_PATH')+os.getenv('DATABASE_NAME')
    db.init_app(app)
    migrate.init_app(app,db)


    import main.resources as resources
    api.add_resource(resources.UsuariosResource, '/usuarios')
    api.add_resource(resources.UsuarioResource, '/usuario/<id>')
    api.add_resource(resources.UsuariosAlumnosResource, '/usuarios_alumnos')
    api.add_resource(resources.UsuarioAlumnoResource, '/usuario_alumno/<id>')
    api.add_resource(resources.UsuariosProfesoresResource, '/usuarios_profesores')
    api.add_resource(resources.UsuarioProfesorResource, '/usuario_profesor/<id>')
    api.add_resource(resources.PlanificacionAlumnoResource, '/planificacion_alumno/<id>')
    api.add_resource(resources.PlanificacionProfesorResource, '/planificacion_profesor/<id>')
    api.add_resource(resources.PlanificacionesProfesoresResource, '/planificaciones_profesores')
    api.add_resource(resources.ClasesResource, '/clases')
    api.add_resource(resources.ClaseResource, '/clase/<id>')
    api.add_resource(resources.PagoResource, '/pago/<id>')
    api.add_resource(resources.LoginResource, '/login')
#Iniciaremos los modulos de la app 
#retornamos la app inicializada
    api.init_app(app)
    return app