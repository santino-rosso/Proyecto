from flask_restful import Resource
from flask import request

PROFESORES = {
    1: {'id_profesor' : '1', 'clase':'futbol' },
    2: {'id_profesor': '2', 'clase':'boxeo' }
}

class Profesores(Resource):
    def get(self):
        return PROFESORES

