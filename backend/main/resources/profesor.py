from flask_restful import Resource
from flask import request, jsonify
from .. import db
from main.models import ProfesoresClasesModel


#Datos de prueba en JSON
# PROFESORES = {
#     1: {'id_profesor' : '1', 'clase':'futbol' },
#     2: {'id_profesor': '2', 'clase':'boxeo' }
# }


class Profesores(Resource):
    def get(self):
        profesores = db.session.query(ProfesoresClasesModel).all()
        return jsonify([profesor.to_json() for profesor in profesores])


