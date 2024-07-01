from flask_restful import Resource
from flask import request, jsonify
from .. import db
from main.models import UsuariosModel
from main.models import ProfesoresModel
from main.models import AlumnosModel
from main.models import PlanificacionesModel
from sqlalchemy import desc, func,or_,and_
from flask_jwt_extended import jwt_required, get_jwt_identity
from main.auth.decorators import role_required
#Datos de prueba en JSON
# USUARIOS = {
#     1: {'nombre':'Lionel', 'apellido':'Messi'},
#     2: {'nombre':'Enzo', 'apellido':'Fernandez'}
# }

# USUARIOS_PROFESORES={
#     1: {'nombre':'Lionel', 'apellido':'Scaloni'},
#     2: {'nombre':'Sergio', 'apellido':'Martinez'}
# }
# USUARIOS_ALUMNOS={
#     1: {'nombre':'Rodrigo', 'apellido':'De Paul'},
#     2: {'nombre':'Julian', 'apellido':'Alvarez'}
# }


class Usuario(Resource):
    @jwt_required()
    def get(self, id):
        usuario = db.session.query(UsuariosModel).get_or_404(id)
        return usuario.to_json()
    

    @role_required(roles = ["Admin"])
    def delete(self, id):
        usuario = db.session.query(UsuariosModel).get_or_404(id)
        db.session.delete(usuario)
        db.session.commit()
        return '', 204
    
    
    # def put(self, id):
    #     usuario = db.session.query(UsuariosModel).get_or_404(id)
    #     data = request.get_json().items()
    #     for key, value in data:
    #         setattr(usuario, key, value)
    #     db.session.add(usuario)
    #     db.session.commit()
    #     return usuario.to_json(), 201

    def put(self, id):
        usuario = db.session.query(UsuariosModel).get_or_404(id)
        data = request.get_json().items()

        for key, value in data:
            if key == 'contraseña':
                # Utiliza el setter plain_contraseña para establecer y hashear la nueva contraseña
                usuario.plain_contraseña = value
            else:
                setattr(usuario, key, value)
        db.session.add(usuario)
        db.session.commit()
        return usuario.to_json(), 201


class Usuarios(Resource):
    @jwt_required()
    def get(self):
        page = 1

        per_page = 10
        
        usuarios = db.session.query(UsuariosModel)
        if request.args.get('page'):
            page = int(request.args.get('page'))
        if request.args.get('per_page'):
            per_page = int(request.args.get('per_page'))
        
        if request.args.get('rol'):
            usuarios=usuarios.filter(UsuariosModel.rol.like("%"+request.args.get('rol')+"%"))
        
        if request.args.get('sortby_apellido'):
            usuarios=usuarios.order_by(desc(UsuariosModel.apellido))
            
        if request.args.get('search_term'):
            search_term = request.args.get('search_term')
            search_terms = search_term.split(' ')
            
            if len(search_terms) == 1:
                usuarios = usuarios.filter(or_(
                    UsuariosModel.nombre.like(f"%{search_term}%"), 
                    UsuariosModel.apellido.like(f"%{search_term}%")
                ))
            else:
                usuarios = usuarios.filter(and_(
                    UsuariosModel.nombre.like(f"%{search_terms[0]}%"),
                    UsuariosModel.apellido.like(f"%{search_terms[1]}%")
                ))
        

        usuarios = usuarios.paginate(page=page, per_page=per_page, error_out=True, max_per_page=30)

        return jsonify({'usuario': [usuario.to_json() for usuario in usuarios],
                  'total': usuarios.total,
                  'pages': usuarios.pages,
                  'page': page
                })
    
    @role_required(roles = ["Admin"])
    def post(self):
        usuario = UsuariosModel.from_json(request.get_json())
        db.session.add(usuario)
        db.session.commit()
        return usuario.to_json(), 201

class UsuarioAlumno(Resource):
    
    @jwt_required(optional=True)
    def get(self, id):
        usuario = db.session.query(AlumnosModel).get_or_404(id)
        
        current_identity = get_jwt_identity()
        if current_identity:
            return usuario.to_json_complete()
        else:
            return usuario.to_json()
    
    @role_required(roles = ["Admin", "Profesor"])
    def delete(self, id):
        usuario_alumno = db.session.query(AlumnosModel).get_or_404(id)
        db.session.delete(usuario_alumno)
        db.session.commit()
        return '', 204
    
    @role_required(roles = ["Admin", "Profesor"])
    def put(self, id):
        usuario_alumno = db.session.query(AlumnosModel).get_or_404(id)
        data = request.get_json().items()
        for key, value in data:
            setattr(usuario_alumno, key, value)
        db.session.add(usuario_alumno)
        db.session.commit()
        return usuario_alumno.to_json(), 201
        

class UsuariosAlumnos(Resource):
    @jwt_required()
    def get(self):
        page = 1

        per_page = 10
        
        usuarios_a = db.session.query(AlumnosModel)
        if request.args.get('page'):
            page = int(request.args.get('page'))
        if request.args.get('per_page'):
            per_page = int(request.args.get('per_page'))
        
        if request.args.get('sortby_nro_socio'):
            usuarios_a=usuarios_a.order_by(desc(AlumnosModel.nro_socio))
        
        if request.args.get('nrplanificaciones'):
            usuarios_a=usuarios_a.outerjoin(AlumnosModel.planificaciones).group_by(AlumnosModel.nro_socio).having(func.count(PlanificacionesModel.id) >= int(request.args.get('nrplanificaciones')))
        

        usuarios_a = usuarios_a.paginate(page=page, per_page=per_page, error_out=True, max_per_page=30)

        return jsonify({'usuario': [usuario.to_json() for usuario in usuarios_a],
                  'total': usuarios_a.total,
                  'pages': usuarios_a.pages,
                  'page': page
                })
    
    @role_required(roles = ["Admin", "Profesor"])
    def post(self):
        usuario_alumno = AlumnosModel.from_json(request.get_json())
        try:
            db.session.add(usuario_alumno)
            db.session.commit()
        except:
            return "Formato no correcto", 400
        return usuario_alumno.to_json(), 201


class UsuarioProfesor(Resource):
    @jwt_required(optional=True)
    def get(self, id):
        usuario = db.session.query(ProfesoresModel).get_or_404(id)
        
        current_identity = get_jwt_identity()
        if current_identity:
            return usuario.to_json_complete()
        else:
            return usuario.to_json()
        
    @role_required(roles = ["Admin"])
    def put(self, id):
        try:
            usuario_profesor = db.session.query(ProfesoresModel).get(id)
            if usuario_profesor is None:
                usuario_profesor = ProfesoresModel.from_json(request.get_json())
                db.session.add(usuario_profesor)
                db.session.commit()
                return usuario_profesor.to_json(), 201
            else:
                data = request.get_json().items()
                for key, value in data:
                    setattr(usuario_profesor, key, value)
                db.session.add(usuario_profesor)
                db.session.commit()
                return usuario_profesor.to_json(), 201
        except:
            return "Formato no correcto", 400
        
class UsuariosProfesores(Resource):
    @jwt_required(optional=True)
    def get(self):
        page = 1

        per_page = 10
        
        usuarios_p = db.session.query(ProfesoresModel)
        if request.args.get('page'):
            page = int(request.args.get('page'))
        if request.args.get('per_page'):
            per_page = int(request.args.get('per_page'))
        
        if request.args.get('nrplanificaciones'):
            usuarios_p=usuarios_p.outerjoin(ProfesoresModel.planificaciones).group_by(ProfesoresModel.especialidad).having(func.count(PlanificacionesModel.id) >= int(request.args.get('nrplanificaciones')))
        

        usuarios_p = usuarios_p.paginate(page=page, per_page=per_page, error_out=True, max_per_page=30)

        return jsonify({'usuario_profesor': [usuario.to_json() for usuario in usuarios_p],
                  'total': usuarios_p.total,
                  'pages': usuarios_p.pages,
                  'page': page
                })
    
    
