from flask_restful import Resource
from flask import request

PLANIFICACIONES={  
    1: {'Objetivo':'Hipertrofia', },
    2: {'Objetivo':'Fuerza', },
    3: {'Objetivo':'Cardio' } }

PLANIFICACION_ALUMNO={
    1: {'id_alumno': '1' , 'id_planificacion': '1'}
}

class PlanificacionAlumno(Resource):
     def get(self, id):
        if int(id) in  PLANIFICACION_ALUMNO:
            return PLANIFICACION_ALUMNO [int(id)]
        return '', 404
class PlanificacionProfesor(Resource):
    def get(self, id):
    
        if int(id) in   PLANIFICACIONES:
            return PLANIFICACIONES [int(id)]
        return '', 404
    def delete(self, id):
        if int(id) in PLANIFICACIONES:
            del PLANIFICACIONES[int(id)]
            return '', 204
        return '', 404
    def put(self, id):
        if int(id) in PLANIFICACIONES:
            planificacion = PLANIFICACIONES[int(id)]
            data = request.get_json()
            planificacion.update(data)
            return '', 201
        return '', 404
class PlanificacionesProfesores(Resource):
    def get(self):
        return PLANIFICACIONES
    def post(self):
        planificaciones = request.get_json()
        id = int(max(PLANIFICACIONES.keys()))+1
        PLANIFICACIONES[id] = planificaciones
        return PLANIFICACIONES[id], 201
