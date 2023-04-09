from flask_restful import Resource
from flask import request

LOGIN={
    1:{'nombre_usuario': 'nicola123', 'password':'12345678'}
}

class Login(Resource):
    def post(self):
        login = request.get_json()
        id = int(max(LOGIN.keys()))+1
        LOGIN[id] = login
        return LOGIN[id], 201
    