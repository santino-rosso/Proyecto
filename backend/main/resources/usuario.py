from flask_restful import Resource
from flask import request, jsonify
from .. import db
from main.models import UsuariosModel
from main.models import ProfesoresModel
from main.models import AlumnosModel

#Datos de prueba en JSON
# USUARIOS = {
#     1: {'nombre':'Lionel', 'apellido':'Messi'},
#     2: {'nombre':'Enzo', 'apellido':'Fernandez'}
# }

# USUARIOS_PROFESORES={
#     1: {'nombre':'Lionel', 'apellido':'Scaloni'},
#     2: {'nombre':'Sergio', 'apellido':'Martinez'}
# }
# USUARIOS_ALUMNOS={
#     1: {'nombre':'Rodrigo', 'apellido':'De Paul'},
#     2: {'nombre':'Julian', 'apellido':'Alvarez'}
# }


class Usuario(Resource):
    def get(self, id):
        usuario = db.session.query(UsuariosModel).get_or_404(id)
        return usuario.to_json()
    
    def delete(self, id):
        usuario = db.session.query(UsuariosModel).get_or_404(id)
        db.session.delete(usuario)
        db.session.commit()
        return '', 204
    
    def put(self, id):
        usuario = db.session.query(UsuariosModel).get_or_404(id)
        data = request.get_json().items()
        for key, value in data:
            setattr(usuario, key, value)
        db.session.add(usuario)
        db.session.commit()
        return usuario.to_json(), 201


class Usuarios(Resource):
    def get(self):
        usuarios = db.session.query(UsuariosModel).all()
        return jsonify([usuario.to_json() for usuario in usuarios])

    def post(self):
        usuario = UsuariosModel.from_json(request.get_json())
        try:
            db.session.add(usuario)
            db.session.commit()
        except:
            return "Formato no correcto", 400
        return usuario.to_json(), 201

class UsuarioAlumno(Resource):
    def get(self, id):
        usuario_alumno = db.session.query(AlumnosModel).get_or_404(id)
        return usuario_alumno.to_json_complete()
    
    def delete(self, id):
        usuario_alumno = db.session.query(AlumnosModel).get_or_404(id)
        db.session.delete(usuario_alumno)
        db.session.commit()
        return '', 204
    
    def put(self, id):
        usuario_alumno = db.session.query(AlumnosModel).get_or_404(id)
        data = request.get_json().items()
        for key, value in data:
            setattr(usuario_alumno, key, value)
        db.session.add(usuario_alumno)
        db.session.commit()
        return usuario_alumno.to_json(), 201
        

class UsuariosAlumnos(Resource):
    def get(self):
        usuarios_alumnos = db.session.query(AlumnosModel).all()
        return jsonify([usuario_alumno.to_json() for usuario_alumno in usuarios_alumnos])
    
    def post(self):
        usuario_alumno = AlumnosModel.from_json(request.get_json())
        try:
            db.session.add(usuario_alumno)
            db.session.commit()
        except:
            return "Formato no correcto", 400
        return usuario_alumno.to_json(), 201




class UsuarioProfesor(Resource):
    def get(self,id):
        usuario_profesor = db.session.query(ProfesoresModel).get_or_404(id)
        return usuario_profesor.to_json_complete()
    
    def put(self, id):
        usuario_profesor = db.session.query(ProfesoresModel).get_or_404(id)
        data = request.get_json().items()
        for key, value in data:
            setattr(usuario_profesor, key, value)
        db.session.add(usuario_profesor)
        db.session.commit()
        return usuario_profesor.to_json(), 201
        
class UsuariosProfesores(Resource):
    def get(self):
        usuarios_profesores = db.session.query(ProfesoresModel).all()
        return jsonify([usuario_profesor.to_json() for usuario_profesor in usuarios_profesores])
    
    def post(self):
        usuario_profesor = ProfesoresModel.from_json(request.get_json())
        try:
            db.session.add(usuario_profesor)
            db.session.commit()
        except:
            return "Formato no correcto", 400
        return usuario_profesor.to_json(), 201
