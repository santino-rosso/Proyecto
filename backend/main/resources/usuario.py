from flask_restful import Resource
from flask import request

USUARIOS = {
    1: {'nombre':'Lionel', 'apellido':'Messi'},
    2: {'nombre':'Enzo', 'apellido':'Fernandez'}
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
        