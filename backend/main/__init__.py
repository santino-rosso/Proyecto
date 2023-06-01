import os
from flask import Flask
from dotenv import load_dotenv
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_mail import Mail

api = Api()
db = SQLAlchemy()
migrate = Migrate()
jwt = JWTManager()
mailsender = Mail()

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
    app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = int(os.getenv('JWT_ACCESS_TOKEN_EXPIRES'))
    jwt.init_app(app)

    from main.auth import routes
    app.register_blueprint(routes.auth)

    app.config['MAIL_HOSTNAME'] = os.getenv('MAIL_HOSTNAME')
    app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER')
    app.config['MAIL_PORT'] = os.getenv('MAIL_PORT')
    app.config['MAIL_USE_TLS'] = os.getenv('MAIL_USE_TLS')
    app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
    app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
    app.config['FLASKY_MAIL_SENDER'] = os.getenv('FLASKY_MAIL_SENDER')
    #Inicializar en app
    mailsender.init_app(app)
    
    return app
