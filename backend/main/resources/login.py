from flask_restful import Resource
from flask import request, jsonify
from .. import db
from main.models import UsuariosModel


#Datos de prueba en JSON
#LOGIN={
#    1:{'nombre_usuario': 'nicola123', 'password':'12345678'}
#}


class Login(Resource):
    def post(self):
        login = UsuariosModel.from_json(request.get_json())
        db.session.add(login)
        db.session.commit()
        return login.to_json(), 201


        