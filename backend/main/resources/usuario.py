from flask_restful import Resource
from flask import request

USUARIOS = {
    1: {'nombre':'Lionel', 'apellido':'Messi'},
    2: {'nombre':'Enzo', 'apellido':'Fernandez'}
}

USUARIOS_PROFESORES={
    1: {'nombre':'Lionel', 'apellido':'Scaloni'},
    2: {'nombre':'Sergio', 'apellido':'Martinez'}
}
USUARIOS_ALUMNOS={
    1: {'nombre':'Rodrigo', 'apellido':'De Paul'},
    2: {'nombre':'Julian', 'apellido':'Alvarez'}
}

class Usuario(Resource): #A la clase usuario le indico que va a ser del tipo recurso(Resource)
    #obtener recurso
    def get(self, id):
        #Verifico que exista el usuario
        if int(id) in   USUARIOS:
            #retorno usuario
            return USUARIOS [int(id)]
        #Si no existe 404
        return '', 404
    #eliminar recurso
    def delete(self, id):
        #Verifico que exista el usuario
        if int(id) in USUARIOS:
            #elimino usuario
            del USUARIOS[int(id)]
            return '', 204
        #Si no existe 404
        return '', 404
    #Modificar el recurso animal
    def put(self, id):
        if int(id) in USUARIOS:
            usuario = USUARIOS[int(id)]
            data = request.get_json()
            usuario.update(data)
            return '', 201
        return '', 404

#Coleccion de recurso Usuarios
class Usuarios(Resource):
    #obtener listado de usuarios
    def get(self):
        return USUARIOS
    #insertar recurso
    def post(self):
        usuario = request.get_json()
        id = int(max(USUARIOS.keys()))+1
        USUARIOS[id] = usuario 
        return USUARIOS[id], 201
    
class UsuarioAlumno(Resource):
    def get(self, id):
        if int(id) in   USUARIOS_ALUMNOS:
            return USUARIOS_ALUMNOS [int(id)]
        return '', 404
    def delete(self, id):
        if int(id) in USUARIOS_ALUMNOS:
            del USUARIOS_ALUMNOS[int(id)]
            return '', 204
        return '', 404
    def put(self, id):
        if int(id) in USUARIOS_ALUMNOS:
            usuario_alumno = USUARIOS_ALUMNOS[int(id)]
            data = request.get_json()
            usuario_alumno.update(data)
            return '', 201
        return '', 404

class UsuariosAlumnos(Resource):
    def get(self):
        return USUARIOS_ALUMNOS
    def post(self):
        usuario_alumno = request.get_json()
        id = int(max(USUARIOS_ALUMNOS.keys()))+1
        USUARIOS_ALUMNOS[id] = usuario_alumno
        return USUARIOS_ALUMNOS[id], 201
    
class UsuarioProfesor(Resource):
    def get(self,id):
        if int(id) in USUARIOS_PROFESORES:
            return USUARIOS_PROFESORES [int(id)]
        return '', 404
    def put(self, id):
        if int(id) in USUARIOS_PROFESORES:
            usuario_profesor = USUARIOS_PROFESORES[int(id)]
            data = request.get_json()
            usuario_profesor.update(data)
            return '', 201
        return '', 404

    