from flask_restful import Resource
from flask import request, jsonify
from .. import db
from main.models import PlanificacionesModel


#Datos de prueba en JSON
# PLANIFICACIONES={  
#     1: {'Objetivo':'Hipertrofia', },
#     2: {'Objetivo':'Fuerza', },
#     3: {'Objetivo':'Cardio' } }

# PLANIFICACION_ALUMNO={
#     1: {'id_alumno': '1' , 'id_planificacion': '1'}
# }


class PlanificacionAlumno(Resource):
    def get(self, id):
        planificacion = db.session.query(PlanificacionesModel).get_or_404(id)
        return planificacion.to_json()
    

class PlanificacionProfesor(Resource):
    def get(self, id):
        planificacion = db.session.query(PlanificacionesModel).get_or_404(id)
        return planificacion.to_json()
    
    def delete(self, id):
        planificacion = db.session.query(PlanificacionesModel).get_or_404(id)
        db.session.delete(planificacion)
        db.session.commit()
        return '', 204

    def put(self, id):
        planificacion = db.session.query(PlanificacionesModel).get_or_404(id)
        data = request.get_json().items()
        for key, value in data:
            setattr(planificacion, key, value)
        db.session.add(planificacion)
        db.session.commit()
        return planificacion.to_json(), 201

class PlanificacionesProfesores(Resource):
    def get(self):
        id_profesor = request.args.get("id_profesor")
        planificaciones = db.session.query(PlanificacionesModel)
        if id_profesor:
            planificaciones = planificaciones.filter(PlanificacionesModel.id_profesor == id_profesor)
        planificaciones = planificaciones.all()
        return jsonify({"planificaciones": [planificacion.to_json() for planificacion in planificaciones]})

    def post(self):
        planificacion = PlanificacionesModel.from_json(request.get_json())
        print(planificacion)
        try:
            db.session.add(planificacion)
            db.session.commit()
        except:
            return 'Formato no correcto', 400
        return planificacion.to_json(), 201