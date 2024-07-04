from flask_restful import Resource
from flask import request, jsonify
from sqlalchemy import desc
from .. import db
from main.models import ClasesModel, ProfesoresModel
from main.auth.decorators import role_required
from flask_jwt_extended import jwt_required, get_jwt_identity
from datetime import datetime



#Datos de prueba en JSON
# PROFESORES = {
#     1: {'id_profesor' : '1', 'clase':'futbol' },
#     2: {'id_profesor': '2', 'clase':'boxeo' }
# }


class Clase(Resource):
    @jwt_required()
    def get(self, id):
        clase = db.session.query(ClasesModel).get_or_404(id)
        return clase.to_json()
    
    @role_required(roles = ["Admin","Profesor"])
    def put(self, id):
        clase = db.session.query(ClasesModel).get_or_404(id)
        data = request.get_json().items()
        print(data)
        for key, value in data:
            if key == 'horario_clase': #Convierte las fechas de string en datetime para el siguiente formato 01/01/2024, 13:00:00
                value = datetime.strptime(value, '%d/%m/%Y, %H:%M:%S')
            setattr(clase, key, value)
                
        db.session.add(clase)
        db.session.commit()
        return clase.to_json(), 201
    
    
    @role_required(roles = ["Admin","Profesor"])
    def delete(self, id):
        clase = db.session.query(ClasesModel).get_or_404(id)
        db.session.delete(clase)
        db.session.commit()
        return '', 204

class Clases(Resource):
    @jwt_required()
    def get(self):
        page = 1

        per_page = 10
        
        clases = db.session.query(ClasesModel)
        if request.args.get('page'):
            page = int(request.args.get('page'))
        if request.args.get('per_page'):
            per_page = int(request.args.get('per_page'))
        
        if request.args.get('horario_clase'):
            clases=clases.filter(ClasesModel.horario_clase.like("%"+request.args.get('horario_clase')+"%"))
        
        if request.args.get('nombre_clase'):
            clases=clases.filter(ClasesModel.nombre_clase.like("%"+request.args.get('nombre_clase')+"%"))
  
        clases = clases.order_by(desc(ClasesModel.horario_clase))

        clases = clases.paginate(page=page, per_page=per_page, error_out=True, max_per_page=30)

        return jsonify({'clases': [clase.to_json() for clase in clases],
                  'total': clases.total,
                  'pages': clases.pages,
                  'page': page
                })

    @role_required(roles = ["Profesor"])
    def post(self):
        clase = ClasesModel.from_json(request.get_json())
        print(clase)
        try:
            db.session.add(clase)
            db.session.commit()
        except:
            return "Formato no correcto", 400
        return clase.to_json(), 201
    
class ProfesorClase(Resource):
    @jwt_required()
    def get(self, id):
        # Buscar la clase por su ID
        clase = db.session.query(ClasesModel).get_or_404(id)
        # Obtener el profesor asociado a la clase
        profesor = clase.profesores
        # Convertir el profesor a formato JSON
        profesor_json = [profesor.to_json() for profesor in profesor]
        return profesor_json
    
class ProfesorClases(Resource):
    @jwt_required()
    def get(self):
        data = request.get_json()
        id_profesor = data.get('id_profesor')
        # Buscar al profesor por su ID
        profesor = db.session.query(ProfesoresModel).get_or_404(id_profesor)
        # Obtener las clases asociadas al profesor
        clases = profesor.clases
        # Convertir las clases a formato JSON
        clases_json = [clase.to_json() for clase in clases]
        return clases_json
       
    @role_required(roles = ["Profesor"])   
    def post(self):
        data = request.get_json()
        clase_id = data.get('id_clase')
        profesor_id = data.get('id_profesor')
        clase = db.session.query(ClasesModel).get_or_404(clase_id)
        profesor = db.session.query(ProfesoresModel).get_or_404(profesor_id)
        if clase and profesor:
            clase.profesores.append(profesor)
            db.session.commit()
            return {'message': 'Profesor agregado a la clase exitosamente'}, 201
        else:
            return {'message': 'La clase o el profesor no existen.'}, 404
