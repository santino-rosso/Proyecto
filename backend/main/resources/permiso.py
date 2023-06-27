from flask_restful import Resource
from flask import request, jsonify
from .. import db
from main.models import PermisosModel
from flask_jwt_extended import jwt_required, get_jwt_identity
from main.auth.decorators import role_required


class Permiso(Resource):
    @jwt_required()
    @role_required(["admin"])
    def get(self, id):
        permiso = db.session.query(PermisosModel).get_or_404(id)
        return permiso.json()
    
    @jwt_required()
    @role_required(["admin"])
    def delete(self, id):
        permiso = db.session.query(PermisosModel).get_or_404(id)
        db.session.delete(permiso)
        db.session.commit()
        return '', 204

    @jwt_required()
    @role_required(["admin"])
    def put(self, id):
        permiso = db.session.query(PermisosModel).get_or_404(id)
        data = request.get_json().items()
        for key, value in data:
            setattr(permiso, key, value)
        db.session.add(permiso)
        db.session.commit()
        return permiso.json(), 201
    
class Permisos(Resource):
    @jwt_required()
    @role_required(["admin"])
    def get(self):
        page = 1
        per_page = 10
        permisos = db.session.query(PermisosModel)
        if request.args.get('page'):
            page = int(request.args.get('page'))
        if request.args.get('per_page'):
            per_page = int(request.args.get('per_page'))
       
        if request.args.get('rol'):
            permisos = permisos.filter(PermisosModel.rol == request.args.get('rol'))
    
        permisos = permisos.paginate(page=page, per_page=per_page, error_out=False, max_per_page=10)   


        return jsonify({'permiso': [permiso.json() for permiso in permisos],
            'total': permisos.total,
            'pages': permisos.pages,
            'page': page
        })


    @jwt_required()
    @role_required(["admin"])
    def post(self):
        permiso = PermisosModel.from_json(request.get_json())
        try:
            db.session.add(permiso)
            db.session.commit()
        except:
            return "Formato no correcto", 400
        return permiso.json(), 201