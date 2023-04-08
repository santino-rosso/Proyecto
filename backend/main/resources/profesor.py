from flask_restful import Resource
from flask import request

PROFESORES = {
    1: {'nombre':'Lionel', 'apellido':'Scaloni' , 'clase':'futbol' },
    2: {'nombre':'Sergio', 'apellido':'Martinez', 'clase':'boxeo' }
}

class Profesores(Resource):
    def get(self):
        return PROFESORES

