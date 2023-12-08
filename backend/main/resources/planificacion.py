from flask_restful import Resource
from flask import request, jsonify
from .. import db
from main.models import PlanificacionesModel
from flask_jwt_extended import jwt_required, get_jwt_identity
from main.auth.decorators import role_required
from datetime import datetime
from sqlalchemy import desc



#Datos de prueba en JSON
# PLANIFICACIONES={  
#     1: {'Objetivo':'Hipertrofia', },
#     2: {'Objetivo':'Fuerza', },
#     3: {'Objetivo':'Cardio' } }

# PLANIFICACION_ALUMNO={
#     1: {'id_alumno': '1' , 'id_planificacion': '1'}
# }


class PlanificacionAlumno(Resource):
    @jwt_required()
    def get(self, id):
        planificacion = db.session.query(PlanificacionesModel).get_or_404(id)
        return planificacion.to_json()
    

class PlanificacionProfesor(Resource):
    @jwt_required()
    def get(self, id):
        planificacion = db.session.query(PlanificacionesModel).get_or_404(id)
        return planificacion.to_json()
    
    @role_required(roles = ["Admin","Profesor"])
    def delete(self, id):
        planificacion = db.session.query(PlanificacionesModel).get_or_404(id)
        db.session.delete(planificacion)
        db.session.commit()
        return '', 204
    
    @role_required(roles = ["Admin","Profesor"])
    def put(self, id):
        planificacion = db.session.query(PlanificacionesModel).get_or_404(id)
        data = request.get_json().items()
        for key, value in data:
            # Verificar si el campo es 'fecha' y convertir la cadena a datetime
            if key == 'fecha':
                value = datetime.strptime(value, '%d-%m-%Y')
            setattr(planificacion, key, value)
        db.session.add(planificacion)
        db.session.commit()
        return planificacion.to_json(), 201

class PlanificacionesProfesores(Resource):
    @jwt_required()
    def get(self):
        page = 1

        per_page = 10
        
        planificaciones = db.session.query(PlanificacionesModel)
        if request.args.get('page'):
            page = int(request.args.get('page'))
        if request.args.get('per_page'):
            per_page = int(request.args.get('per_page'))
        
        if request.args.get('fecha'):
            planificaciones=planificaciones.filter(PlanificacionesModel.fecha.like("%"+request.args.get('fecha')+"%"))
        
        if request.args.get('id_profesor'):
            planificaciones=planificaciones.filter(PlanificacionesModel.id_profesor.like("%"+request.args.get('id_profesor')+"%"))

        if request.args.get('id_alumno'):
            planificaciones=planificaciones.filter(PlanificacionesModel.id_alumno.like("%"+request.args.get('id_alumno')+"%"))

        planificaciones = planificaciones.order_by(desc(PlanificacionesModel.fecha))

        planificaciones = planificaciones.paginate(page=page, per_page=per_page, error_out=True, max_per_page=30)

        return jsonify({'planificacion': [planificacion.to_json_complete() for planificacion in planificaciones],
                  'total': planificaciones.total,
                  'pages': planificaciones.pages,
                  'page': page
                })
    
    @role_required(roles = ["Admin","Profesor"])
    def post(self):
        planificacion = PlanificacionesModel.from_json(request.get_json())
        print(planificacion)
        try:
            db.session.add(planificacion)
            db.session.commit()
        except:
            return "Formato no correcto", 400
        return planificacion.to_json(), 201