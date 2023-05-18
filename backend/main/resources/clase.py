from flask_restful import Resource
from flask import request, jsonify
from .. import db
from main.models import ClasesModel
from main.auth.decorators import role_required
from flask_jwt_extended import jwt_required, get_jwt_identity


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
        for key, value in data:
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
        
        if request.args.get('sortby_nombre_clase'):
            clases=clases.order_by((ClasesModel.nombre_clase))
  
        

        clases = clases.paginate(page=page, per_page=per_page, error_out=True, max_per_page=30)

        return jsonify({'clases': [clase.to_json() for clase in clases],
                  'total': clases.total,
                  'pages': clases.pages,
                  'page': page
                })

    @role_required(roles = ["Admin","Profesor"])
    def post(self):
        clase = ClasesModel.from_json(request.get_json())
        try:
            db.session.add(clase)
            db.session.commit()
        except:
            return "Formato no correcto", 400
        return clase.to_json(), 201
    
   